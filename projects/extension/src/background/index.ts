import westend2 from "../../public/assets/westend2.json"
import ksmcc3 from "../../public/assets/ksmcc3.json"
import polkadot from "../../public/assets/polkadot.json"
import rococo_v2_2 from "../../public/assets/rococo_v2_2.json"

import { start as smoldotStart } from "smoldot"

import { ToContentScript, ToExtension } from "./protocol"
import * as environment from "../environment"
import { SandboxWithHealth } from "./SandboxWithHealth"

// Loads the well-known chains bootnodes from the local storage and returns the well-known
// chains.
const loadWellKnownChains = async (): Promise<Map<string, string>> => {
  let polkadot_cp = Object.assign({}, polkadot)
  let ksmcc3_cp = Object.assign({}, ksmcc3)
  let westend2_cp = Object.assign({}, westend2)
  let rococo_cp = Object.assign({}, rococo_v2_2)

  const polkadotBootnodes = await environment.get({
    type: "bootnodes",
    chainName: polkadot_cp.id,
  })
  if (polkadotBootnodes) {
    polkadot_cp.bootNodes = polkadotBootnodes
  }

  const ksmcc3Bootnodes = await environment.get({
    type: "bootnodes",
    chainName: ksmcc3_cp.id,
  })
  if (ksmcc3Bootnodes) {
    ksmcc3_cp.bootNodes = ksmcc3Bootnodes
  }

  const westend2Bootnodes = await environment.get({
    type: "bootnodes",
    chainName: westend2_cp.id,
  })
  if (westend2Bootnodes) {
    westend2_cp.bootNodes = westend2Bootnodes
  }

  const rococoBootnodes = await environment.get({
    type: "bootnodes",
    chainName: rococo_cp.id,
  })
  if (rococoBootnodes) {
    rococo_cp.bootNodes = rococoBootnodes
  }

  // Note that this list doesn't necessarily always have to match the list of well-known
  // chains in `@substrate/connect`. The list of well-known chains is not part of the stability
  // guarantees of the connect <-> extension protocol and is thus allowed to change
  // between versions of the extension. For this reason, we don't use the `WellKnownChain`
  // enum from `@substrate/connect` but instead manually make the list in that enum match
  // the list present here.
  return new Map<string, string>([
    [polkadot_cp.id, JSON.stringify(polkadot_cp)],
    [ksmcc3_cp.id, JSON.stringify(ksmcc3_cp)],
    [rococo_cp.id, JSON.stringify(rococo_cp)],
    [westend2_cp.id, JSON.stringify(westend2_cp)],
  ])
}

// The manager can be in multiple different states: currently initializing, operational, or
// crashed.
// While initializing, the `whenInitFinished` promise can be used to know when the initialization
// is over and the manager is now operational or crashed.
let manager:
  | { state: "initializing"; whenInitFinished: Promise<void> }
  | {
      state: "ready"
      manager: SandboxWithHealth<chrome.runtime.Port | null>
    }
  | { state: "crashed"; error: string } = {
  state: "initializing",
  whenInitFinished: (async () => {})(),
}

manager = {
  state: "initializing",
  whenInitFinished: (async () => {
    try {
      const wellKnownChains = await loadWellKnownChains()

      // Start initializing a `SandboxWithHealth`.
      // This initialization operation shouldn't take more than a few dozen milliseconds, but we
      // still need to properly handle situations where initialization isn't finished yet.
      const managerInit = new SandboxWithHealth<chrome.runtime.Port | null>(
        wellKnownChains,
        smoldotStart({
          // Because we are in the context of a web page, trying to open TCP connections or non-secure
          // WebSocket connections to addresses other than localhost will lead to errors. As such, we
          // disable these types of connections ahead of time.
          forbidTcp: true,
          forbidNonLocalWs: true,

          // In order to be polite, we limit smoldot to 50% CPU consumption.
          cpuRateLimit: 0.5,

          maxLogLevel: 4,
          logCallback: (level, target, message) => {
            // These logs are shown directly in the web page's console.
            // The first parameter of the methods of `console` has some printf-like substitution
            // capabilities. We don't really need to use this, but not using it means that the logs
            // might not get printed correctly if they contain `%`.
            if (level <= 1) {
              console.error(
                "[substrate-connect-extension] [%s] %s",
                target,
                message,
              )
            } else if (level === 2) {
              console.warn(
                "[substrate-connect-extension] [%s] %s",
                target,
                message,
              )
            } else if (level === 3) {
              console.info(
                "[substrate-connect-extension] [%s] %s",
                target,
                message,
              )
            } else if (level === 4) {
              console.debug(
                "[substrate-connect-extension] [%s] %s",
                target,
                message,
              )
            } else {
              console.trace(
                "[substrate-connect-extension] [%s] %s",
                target,
                message,
              )
            }
          },
        }),
      )

      managerInit.addSandbox(null)

      const startDbQueries = []

      for (const key of wellKnownChains.keys()) {
        const dbContent = await new Promise<string | undefined>((res) =>
          chrome.storage.local.get([key], (val) => {
            return res(val[key] as string)
          }),
        )

        managerInit.sandboxMessage(null, {
          origin: "trusted-user",
          chainId: key,
          chainName: key,
          type: "add-well-known-chain-with-db",
          databaseContent: dbContent,
        })
        // Wait for the manager to confirm the chain creation.
        while (true) {
          const msg = await managerInit.nextSandboxMessage(null)
          if (msg.type === "error" && msg.chainId === key) {
            throw new Error(
              "Failed to initialize well-known chain: " + msg.errorMessage,
            )
          }
          if (msg.type === "chain-ready" && msg.chainId === key) {
            break
          }
        }

        if (!dbContent) startDbQueries.push(key)
      }

      manager = { state: "ready", manager: managerInit }
      console.log("sent")
    } catch (error: any) {
      const msg =
        error instanceof Error
          ? error.toString()
          : "Unknown error at initialization"
      manager = { state: "crashed", error: msg }
    }
  })(),
}

// Handle new port connections.
//
// Whenever a tab starts using the substrate-connect extension, it will open a port. This is caught
// here.
chrome.runtime.onConnect.addListener((port) => {
  // The difficulty here is that the manager might not have completely finished its
  // initialization. However, we need to immediately add listeners to `port.onMessage` and
  // to `port.onDisconnect` in order to be sure to not miss events.

  // To handle this properly, we hold a `Promise` here, and update it every time we do
  // something relevant to that port, making sure that everything happens in the correct order.

  // Note that as long as the manager hasn't finished initializing, the chain of promises will
  // continue to grow indefinitely. While this is a problem *in theory*, in practice the manager
  // initialization shouldn't take more than a few dozen milliseconds and it is actually unlikely
  // for any message to arrive at all.

  let managerPromise = (async () => {
    while (true) {
      if (manager.state === "initializing") {
        await manager.whenInitFinished
      } else if (manager.state === "ready") {
        return manager.manager
      } else if (manager.state === "crashed") {
        return undefined
      }
    }
  })()

  let managerWithSandbox = managerPromise.then((readyManager) => {
    if (!readyManager) return readyManager

    readyManager.addSandbox(port)

    console.log("added", port)
    return readyManager
  })

  port.onMessage.addListener((message: ToExtension) => {
    console.log("message", message)
    managerWithSandbox = managerWithSandbox.then((manager) => {
      console.log("manager", manager)

      return manager
    })
  })

  port.onDisconnect.addListener(() => {
    managerWithSandbox = managerWithSandbox.then((manager) => {
      if (!manager) return manager

      manager.deleteSandbox(port)
      // notifyAllChainsChangedListeners()
      return manager
    })
  })
})
