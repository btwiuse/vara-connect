import westend2 from "../../public/assets/westend2.json"
import ksmcc3 from "../../public/assets/ksmcc3.json"
import polkadot from "../../public/assets/polkadot.json"
import rococo_v2_2 from "../../public/assets/rococo_v2_2.json"

import { start as startSmoldotClient } from "smoldot"

import * as environment from "../environment"
import { SandboxWithHealth } from "./SandboxWithHealth"
import {
  ToApplication,
  ToExtension,
} from "@substrate/connect-extension-protocol"

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
    // [polkadot_cp.id, JSON.stringify(polkadot_cp)],
    // [ksmcc3_cp.id, JSON.stringify(ksmcc3_cp)],
    // [rococo_cp.id, JSON.stringify(rococo_cp)],
    [westend2_cp.id, JSON.stringify(westend2_cp)],
  ])
}

// Listeners that must be notified when the `get chains()` getter would return a different value.
const chainsChangedListeners: Set<() => void> = new Set()
const notifyAllChainsChangedListeners = () => {
  chainsChangedListeners.forEach((l) => {
    try {
      l()
    } catch (e) {
      console.error("Uncaught exception in onChainsChanged callback:", e)
    }
  })
}
// Listeners that must be notified when the `get smoldotCrashError()` getter would return a
// different value.
const smoldotCrashErrorChangedListeners: Set<() => void> = new Set()
const notifyAllSmoldotCrashErrorChangedListeners = () => {
  smoldotCrashErrorChangedListeners.forEach((l) => {
    try {
      l()
    } catch (e) {
      console.error(
        "Uncaught exception in onSmoldotCrashErrorChanged callback:",
        e,
      )
    }
  })
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
        startSmoldotClient({
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

      // Query the databases of chains whose database was unknown.
      // This needs to be done after all well-known chains are initialized, otherwise the code
      // right above that waits for chains to be ready might catch the response to the database
      // query.
      for (const key of startDbQueries)
        managerInit.sandboxMessage(null, {
          origin: "trusted-user",
          type: "database-content",
          chainId: key,
          sizeLimit: chrome.storage.local.QUOTA_BYTES / wellKnownChains.size,
        })

        // TODO: stop this task if the manager crashes?
      ;(async () => {
        while (true) {
          const message = await managerInit.nextSandboxMessage(null)
          if (
            message.type === "chains-status-changed" ||
            message.type === "error"
          ) {
            notifyAllChainsChangedListeners()
          } else if (message.type === "database-content") {
            chrome.storage.local.set({
              [message.chainId]: message.databaseContent,
            })
          }
        }
      })()

      // Create an alarm that will periodically save the content of the database of the well-known
      // chains.
      chrome.alarms.onAlarm.addListener(async (alarm) => {
        if (alarm.name === "DatabaseContentAlarm") {
          for (const [key] of wellKnownChains)
            managerInit.sandboxMessage(null, {
              origin: "trusted-user",
              type: "database-content",
              chainId: key,
              sizeLimit:
                chrome.storage.local.QUOTA_BYTES / wellKnownChains.size,
            })
        }
      })
      chrome.alarms.create("DatabaseContentAlarm", {
        periodInMinutes: 1440,
      })

      // Success. Update the state and notify listeners.
      notifyAllChainsChangedListeners()
      manager = { state: "ready", manager: managerInit }
    } catch (error: any) {
      notifyAllSmoldotCrashErrorChangedListeners()
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

    // This stops looping through "readyManager"
    ;(async () => {
      console.log("start looping")
      while (true) {
        let message
        try {
          message = await readyManager.nextSandboxMessage(port)
          console.log(
            "--- await readyManager.nextSandboxMessage(port) ------>>>>>>>>> ",
            message,
          )
        } catch (error) {
          console.log("ER-R-O-R", error)
          // An error is thrown by `nextSandboxMessage` if the sandbox is destroyed.
          break
        }

        if (message.type === "chains-status-changed") {
          notifyAllChainsChangedListeners()
        } else if (message.type === "database-content") {
          // We never ask for the database content of a chain added through a port.
        } else {
          if (message.type === "chain-ready" || message.type === "error")
            notifyAllChainsChangedListeners()

          // We make sure that the message is indeed of type `ToApplication`.
          const messageCorrectType: ToApplication = message
          console.log("--- ToApplication = message >>>>>> ", message)
          port.postMessage(messageCorrectType)

          // If an error happened, this might be an indication that the manager has crashed.
          // If that is the case, we need to notify the UI and restart everything.
          if (message.type === "error") {
            const error = readyManager.hasCrashed
            if (error) {
              manager = { state: "crashed", error }
              notifyAllSmoldotCrashErrorChangedListeners()
              notifyAllChainsChangedListeners()
            }
          }
        }
      }
    })()

    return readyManager
  })

  port.onMessage.addListener((message: ToExtension) => {
    managerWithSandbox = managerWithSandbox.then(
      (manager: SandboxWithHealth<chrome.runtime.Port | null> | undefined) => {
        if (manager) {
          manager.sandboxMessage(port, message)
          if (
            message.type === "add-chain" ||
            message.type === "add-well-known-chain" ||
            message.type === "remove-chain"
          ) {
            notifyAllChainsChangedListeners()
          }
        } else {
          console.log("message.type ===> ", message.type)
          // If the page wants to send a message while the manager has crashed, we instantly
          // return an error.
          if (
            message.type === "add-chain" ||
            message.type === "add-well-known-chain"
          ) {
            const msg: ToApplication = {
              origin: "substrate-connect-extension",
              type: "error",
              chainId: message.chainId,
              errorMessage: "Smoldot has crashed",
            }
            port.postMessage(msg)
          }
        }
        return manager
      },
    )
  })

  port.onDisconnect.addListener(() => {
    managerWithSandbox = managerWithSandbox.then((manager) => {
      if (!manager) return manager

      manager.deleteSandbox(port)
      notifyAllChainsChangedListeners()
      return manager
    })
  })
})
