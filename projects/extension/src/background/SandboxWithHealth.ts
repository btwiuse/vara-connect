import { Client as SmoldotClient } from "smoldot"
import { Sandbox } from "./Sandbox"
import {
  Chain,
  ChainsStatusChanged,
  ToOutsideDatabaseContent,
  ToSandbox,
} from "./types"
import {
  ToApplication,
  ToExtension,
} from "@substrate/connect-extension-protocol"

export class SandboxWithHealth<SandboxId> {
  #inner: Sandbox<SandboxId>
  #sandboxesChains: Map<SandboxId, Map<string, Chain>> = new Map()
  #pingInterval
  #nextRpcRqId = 0

  constructor(
    wellKnownChainSpecs: Map<string, string>,
    smoldotClient: SmoldotClient,
  ) {
    // Create a Sandbox for holding all chains
    this.#inner = new Sandbox(wellKnownChainSpecs, smoldotClient)
    this.#pingInterval = globalThis.setInterval(() => {
      this.#sendPings()
    }, 10000)
  }

  /**
   * Inserts a sandbox in the list of sandboxes held by this state machine.
   *
   * @throws Throws an exception if a sandbox with that identifier already exists.
   */
  addSandbox(sandboxId: SandboxId) {
    // We don't neeed to check for duplicate `sandboxId` below, because this is done
    // by `this.#inner.addSandbox`. For this reason, we call `this.#inner` first.
    this.#inner.addSandbox(sandboxId)

    this.#sandboxesChains.set(sandboxId, new Map())
  }

  /**
   * Removes a sandbox from the list of sandboxes.
   *
   * This performs some internal clean ups.
   *
   * Any `Promise` concerning this sandbox that was returned by
   * {ConnectionManager.nextSandboxMessage} will generate an error.
   *
   * @throws Throws an exception if the ̀`sandboxId` isn't valid.
   */
  deleteSandbox(sandboxId: SandboxId) {
    this.#inner.deleteSandbox(sandboxId)
    this.#sandboxesChains.delete(sandboxId)
  }

  /**
   * Returns the next {ToApplication} message that is generated spontaneously or in response to
   * `sandboxMessage`.
   *
   * Alternatively, can also generate a {@link ToOutsideDatabaseContent} to report the database
   * content, or a {@link ChainsStatusChanged} in case the status of one of the chains in the
   * sandbox has changed.
   *
   * If a message is generated by a sandbox before this function is called, the message is queued.
   *
   * @throws Throws an exception if the ̀`sandboxId` isn't valid.
   */
  async nextSandboxMessage(
    sandboxId: SandboxId,
  ): Promise<ToApplication | ToOutsideDatabaseContent | ChainsStatusChanged> {
    while (true) {
      console.log("sandboxID", sandboxId)
      const toApplication = await this.#inner.nextSandboxMessage(sandboxId)

      switch (toApplication.type) {
        case "chain-ready": {
          // Internal check to make sure that there's no hidden bug.
          if (!this.#sandboxesChains.get(sandboxId)!.has(toApplication.chainId))
            throw new Error(
              "Internal error: inconsistency between lists of chains",
            )

          console.log("this.#inner.sandboxMessage")
          //     this.#inner.sandboxMessage(sandboxId, {
          //     origin: "substrate-connect-client",
          //     type: "rpc",
          //     chainId: toApplication.chainId,
          //     jsonRpcMessage: JSON.stringify({
          //       jsonrpc: "2.0",
          //       id: "ready-sub:" + this.#nextRpcRqId,
          //       method: "chainHead_unstable_follow",
          //       params: [true],
          //     }),
          //   })
          this.#nextRpcRqId += 1
          return toApplication
        }

        case "rpc": {
          const chain = this.#sandboxesChains
            .get(sandboxId)!
            .get(toApplication.chainId)!

          // Do the opposite of what is done when a JSON-RPC request arrives by removing the
          // prefix in front of the response.
          // Because smoldot always sends back correct answers, we can just assume that all the
          // fields are present.
          let jsonRpcMessage = JSON.parse(toApplication.jsonRpcMessage)

          // The JSON-RPC message might not contain an id if it is a notification.
          if (jsonRpcMessage.id) {
            // We know that the `id` is always a string, because all the requests that we send are
            // rewritten to use a string `id`.
            const jsonRpcMessageId = jsonRpcMessage.id as string

            if (jsonRpcMessageId.startsWith("extern:")) {
              jsonRpcMessage.id = JSON.parse(
                (jsonRpcMessage.id as string).slice("extern:".length),
              )
              toApplication.jsonRpcMessage = JSON.stringify(jsonRpcMessage)
              return toApplication
            } else if (jsonRpcMessageId.startsWith("health-check:")) {
              // Store the health status in the locally-held information.
              const result: { peers: number } = jsonRpcMessage.result
              chain.peers = result.peers

              // Notify of the change in status.
              return {
                origin: "connection-manager",
                type: "chains-status-changed",
              }
            } else if (jsonRpcMessageId.startsWith("ready-sub:")) {
              chain.readySubscriptionId = jsonRpcMessage.result
            } else if (jsonRpcMessageId.startsWith("block-unpin:")) {
            } else if (jsonRpcMessageId.startsWith("best-block-header:")) {
              // We might receive responses to header requests concerning blocks that were but are
              // no longer the best block of the chain. Ignore these responses.
              if (jsonRpcMessageId === chain.bestBlockHeaderRequestId) {
                delete chain.bestBlockHeaderRequestId
                // The RPC call might return `null` if the subscription is dead.
                if (jsonRpcMessage.result) {
                  try {
                    chain.bestBlockHeight = headerToHeight(
                      jsonRpcMessage.result,
                    )
                  } catch (error) {
                    delete chain.bestBlockHeight
                  }
                }
              }
            } else {
              // Never supposed to happen. Indicates a bug somewhere.
              throw new Error()
            }
          } else {
            if (
              jsonRpcMessage.method === "chainHead_unstable_followEvent" &&
              jsonRpcMessage.params.subscription === chain.readySubscriptionId
            ) {
              // We've received a notification on our `chainHead_unstable_followEvent`
              // subscription.
              switch (jsonRpcMessage.params.result.event) {
                case "initialized": {
                  // The chain is now in sync and has downloaded the runtime.
                  chain.isSyncing = false
                  chain.finalizedBlockHashHex =
                    jsonRpcMessage.params.result.finalizedBlockHash

                  console.log("this.#inner.sandboxMessage health")
                  //   // Immediately send a single health request to the chain.
                  //   this.#inner.sandboxMessage(sandboxId, {
                  //     origin: "substrate-connect-client",
                  //     type: "rpc",
                  //     chainId: toApplication.chainId,
                  //     jsonRpcMessage: JSON.stringify({
                  //       jsonrpc: "2.0",
                  //       id: "health-check:" + this.#nextRpcRqId,
                  //       method: "system_health",
                  //       params: [],
                  //     }),
                  //   })
                  this.#nextRpcRqId += 1

                  console.log(
                    "this.#inner.sandboxMessage chainHead_unstable_header",
                  )
                  //   // Also immediately request the header of the finalized block.
                  //   this.#inner.sandboxMessage(sandboxId, {
                  //     origin: "substrate-connect-client",
                  //     type: "rpc",
                  //     chainId: toApplication.chainId,
                  //     jsonRpcMessage: JSON.stringify({
                  //       jsonrpc: "2.0",
                  //       id: "best-block-header:" + this.#nextRpcRqId,
                  //       method: "chainHead_unstable_header",
                  //       params: [
                  //         chain.readySubscriptionId,
                  //         chain.finalizedBlockHashHex,
                  //       ],
                  //     }),
                  //   })
                  chain.bestBlockHeaderRequestId =
                    "best-block-header:" + this.#nextRpcRqId
                  this.#nextRpcRqId += 1

                  // Notify of the change in status.
                  return {
                    origin: "connection-manager",
                    type: "chains-status-changed",
                  }
                }
                case "stop": {
                  // Our subscription has been force-killed by the client. This is normal and can
                  // happen for example if the client is overloaded. Restart the subscription.
                  delete chain.readySubscriptionId
                  delete chain.bestBlockHeaderRequestId
                  delete chain.finalizedBlockHashHex
                  delete chain.bestBlockHeight
                  console.log(
                    "this.#inner.sandboxMessage chainHead_unstable_follow",
                  )
                  //   this.#inner.sandboxMessage(sandboxId, {
                  //     origin: "substrate-connect-client",
                  //     type: "rpc",
                  //     chainId: toApplication.chainId,
                  //     jsonRpcMessage: JSON.stringify({
                  //       jsonrpc: "2.0",
                  //       id: "ready-sub:" + this.#nextRpcRqId,
                  //       method: "chainHead_unstable_follow",
                  //       params: [true],
                  //     }),
                  //   })
                  this.#nextRpcRqId += 1
                  break
                }
                case "bestBlockChanged": {
                  console.log(
                    "this.#inner.sandboxMessage chainHead_unstable_header 2",
                  )
                  //   // The best block has changed. Request the header of this new best block in
                  //   // order to know its height.
                  //   this.#inner.sandboxMessage(sandboxId, {
                  //     origin: "substrate-connect-client",
                  //     type: "rpc",
                  //     chainId: toApplication.chainId,
                  //     jsonRpcMessage: JSON.stringify({
                  //       jsonrpc: "2.0",
                  //       id: "best-block-header:" + this.#nextRpcRqId,
                  //       method: "chainHead_unstable_header",
                  //       params: [
                  //         chain.readySubscriptionId,
                  //         jsonRpcMessage.params.result.bestBlockHash,
                  //       ],
                  //     }),
                  //   })
                  chain.bestBlockHeaderRequestId =
                    "best-block-header:" + this.#nextRpcRqId
                  this.#nextRpcRqId += 1
                  break
                }
                case "finalized": {
                  // When one or more new blocks get finalized, we unpin all blocks except for
                  // the new current finalized.
                  let finalized = jsonRpcMessage.params.result
                    .finalizedBlocksHashes as [string]
                  let pruned = jsonRpcMessage.params.result
                    .prunedBlocksHashes as [string]
                  let newCurrentFinalized = finalized.pop()
                  ;[
                    chain.finalizedBlockHashHex,
                    ...pruned,
                    ...finalized,
                  ].forEach((blockHash) => {
                    // `chain.finalizedBlockHashHex` can be undefined
                    if (blockHash === undefined) return
                    console.log(
                      "this.#inner.sandboxMessage chainHead_unstable_unpin",
                    )
                    // this.#inner.sandboxMessage(sandboxId, {
                    //   origin: "substrate-connect-client",
                    //   type: "rpc",
                    //   chainId: toApplication.chainId,
                    //   jsonRpcMessage: JSON.stringify({
                    //     jsonrpc: "2.0",
                    //     id: "block-unpin:" + this.#nextRpcRqId,
                    //     method: "chainHead_unstable_unpin",
                    //     params: [chain.readySubscriptionId, blockHash],
                    //   }),
                    // })
                    this.#nextRpcRqId += 1
                    chain.finalizedBlockHashHex = newCurrentFinalized
                  })
                  break
                }
              }
            } else {
              return toApplication
            }
          }

          break
        }

        case "error": {
          const hadChain = this.#sandboxesChains
            .get(sandboxId)!
            .delete(toApplication.chainId)
          // Internal check to make sure that there's no hidden bug.
          if (!hadChain)
            throw new Error(
              "Internal error: inconsistency between lists of chains",
            )
          return toApplication
        }

        default: {
          return toApplication
        }
      }
    }
  }

  /**
   * Injects a message into the given sandbox.
   *
   * The message and the behaviour of this function conform to the `connect-extension-protocol` or
   * to the {@link ToSandbox} extension defined in this module.
   *
   * @throws Throws an exception if the ̀`sandboxId` isn't valid.
   */
  sandboxMessage(sandboxId: SandboxId, message: ToExtension | ToSandbox) {
    switch (message.type) {
      case "add-chain":
      case "add-well-known-chain":
      case "add-well-known-chain-with-db": {
        // Note that chains that are still initializing are also kept within `this`, otherwise it
        // isn't possible to keep the list of chains synchronized with the list in the underlying
        // machine without being subject to race conditions.
        this.#sandboxesChains.get(sandboxId)!.set(message.chainId, {
          isSyncing: true,
          peers: 0,
        })
        // this.#inner.sandboxMessage(sandboxId, message)
        console.log("add - send to #innerSandbox message", message)
        break
      }
      case "remove-chain": {
        // As documented in the protocol, remove-chain messages concerning an invalid chainId are
        // simply ignored.
        this.#sandboxesChains.get(sandboxId)!.delete(message.chainId)
        // this.#inner.sandboxMessage(sandboxId, message)
        console.log("remove - send to #innerSandbox message", message)
        break
      }
      case "rpc": {
        // All incoming JSON-RPC requests are modified to add `extern:` in front of their id.
        try {
          let parsedJsonRpcMessage = JSON.parse(message.jsonRpcMessage)
          parsedJsonRpcMessage.id =
            "extern:" + JSON.stringify(parsedJsonRpcMessage.id)
          message.jsonRpcMessage = JSON.stringify(parsedJsonRpcMessage)
        } finally {
          console.log("rpc - send to #innerSandbox message", message)
          //   this.#inner.sandboxMessage(sandboxId, message)
        }
        break
      }
      default: {
        // this.#inner.sandboxMessage(sandboxId, message)
        console.log("default - send to #innerSandbox message", message)
      }
    }
  }

  #sendPings() {
    for (const [sandboxId, sandbox] of this.#sandboxesChains) {
      for (const [chainId] of sandbox) {
        console.log("ping - send to #innerSandbox message", this.#nextRpcRqId)
        // this.#inner.sandboxMessage(sandboxId, {
        //   origin: "substrate-connect-client",
        //   type: "rpc",
        //   chainId,
        //   jsonRpcMessage: JSON.stringify({
        //     jsonrpc: "2.0",
        //     id: "health-check:" + this.#nextRpcRqId,
        //     method: "system_health",
        //     params: [],
        //   }),
        // })
        this.#nextRpcRqId += 1
      }
    }
  }
}

// TODO: this code uses `system_health` at the moment, because there's no alternative, even in the new JSON-RPC API, to get the number of peers

// Converts a block header, as a hexadecimal string, to a block height.
//
// This function should give the accurate block height in most situations, but it is possible that
// the value is erroneous.
//
// This function assumes that the block header is a block header generated using Substrate. This
// is not necessarily always true. When that happens, an error is thrown.
//
// Additionally, this function assumes that the block height is 32bits, which is the case for the
// vast majority of the chains. There is currently no way to know the size of the block height.
// This is a huge flaw in Substrate that we can't do much about here. Fortuntely, since the block
// height is implemented in compact SCALE encoding, as long as the field containing the number is
// at least 32 bits and the value is less than 2^32, it will encode the same regardless.
function headerToHeight(hexHeader: String): number {
  // Remove the initial prefix.
  if (!(hexHeader.startsWith("0x") || hexHeader.startsWith("0X")))
    throw new Error("Not a hexadecimal number")
  hexHeader = hexHeader.slice(2)

  // The header should start with 32 bytes containing the parent hash.
  if (hexHeader.length < 64) throw new Error("Too short")
  hexHeader = hexHeader.slice(64)

  // The next field is the block number (which is what interests us) encoded in SCALE compact.
  // Unfortunately this format is a bit complicated to decode.
  // See https://docs.substrate.io/v3/advanced/scale-codec/#compactgeneral-integers
  if (hexHeader.length < 2) throw new Error("Too short")
  const b0 = parseInt(hexHeader.slice(0, 2), 16)

  switch ((b0 & 3) as 0 | 1 | 2 | 3) {
    case 0: {
      return b0 >> 2
    }
    case 1: {
      if (hexHeader.length < 4) throw new Error("Too short")
      const b1 = parseInt(hexHeader.slice(2, 4), 16)
      return (b0 >> 2) + b1 * 2 ** 6
    }
    case 2: {
      if (hexHeader.length < 8) throw new Error("Too short")
      const b1 = parseInt(hexHeader.slice(2, 4), 16)
      const b2 = parseInt(hexHeader.slice(4, 6), 16)
      const b3 = parseInt(hexHeader.slice(6, 8), 16)
      return (b0 >> 2) + b1 * 2 ** 6 + b2 * 2 ** 14 + b3 * 2 ** 22
    }
    case 3: {
      hexHeader = hexHeader.slice(2)
      let len = (4 + b0) >> 2
      let output = 0
      let base = 0
      while (len--) {
        if (hexHeader.length < 2) throw new Error("Too short")
        // Note that we assume that value can't overflow. This function is a helper and not.
        output += parseInt(hexHeader.slice(0, 2)) << base
        hexHeader = hexHeader.slice(2)
        base += 8
      }
      return output
    }
  }
}
