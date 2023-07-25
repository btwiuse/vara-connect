import { ToApplication } from "@substrate/connect-extension-protocol"
import { Chain as SmoldotChain } from "smoldot"

// ** Exported ** //
export interface Chain {
  // Note that once subscribed, we never unsubscribe.
  //
  // Blocks get unpinned when they become ancestor of the current finalized block. In other words,
  // the current finalized block and all its descendants are kept pinned. This is necessary in
  // order to be able to query the header of the best block, as the best block can be the
  // current finalized block or any of its descendants.
  readySubscriptionId?: string
  isSyncing: boolean
  peers: number
  // Height of the current best block of the chain, or undefined if not known yet or if the
  // height couldn't be defined.
  bestBlockHeight?: number
  // If defined, contains the id of the RPC request whose response contains the header of the
  // best block of the chain.
  bestBlockHeaderRequestId?: string
  // Hash of the current finalized block of the chain in hexadecimal, or undefined if not known
  // yet.
  finalizedBlockHashHex?: string
}

/**
 * Message that notifies of the fact that {ConnectionManagerWithHealth.allChains} will now return
 * a different value.
 *
 * Note that the list of chains also changes if chains are added or removed by the user or by
 * the {ConnectionManagerWithHealth}. This isn't covered by this message.
 */
export interface ChainsStatusChanged {
  origin: "connection-manager"
  type: "chains-status-changed"
}

export interface SandboxIF {
  /**
   * List of chains within this sandbox, identified by the user-provided `id`. Chains can be
   * removed from this list at any time, even if they are still initializing. Be aware that
   * the `id`s (i.e. the keys of this map) are untrusted user input.
   */
  chains: Map<string, InitializingChain | ReadyChain>

  /**
   * Function that pulls a message from the queue of messages, to give it to the API user. Used
   * by {ConnectionManager.nextSandboxMessage}.
   */
  pullMessagesQueue: () => Promise<ToApplication | ToOutside | null>

  /**
   * Function that adds a message to the queue in {Sandbox.pullMessagesQueue}.
   */
  pushMessagesQueue: (message: ToApplication | ToOutside | null) => void
}

export type ToOutside = ToOutsideDatabaseContent

export interface ToOutsideDatabaseContent {
  origin: "connection-manager"
  type: "database-content"
  chainId: string
  databaseContent: string
}

// ** Internal ** //
interface InitializingChain {
  /**
   * Used to differentiate {ReadyChain} from {InitializingChain}.
   */
  isReady: false

  /**
   * Name of the chain found in its chain specification.
   *
   * Beware that this is untrusted user input.
   */
  name: string

  /**
   * Promise provided by the smoldot client. Will be ready once the chain initialization has
   * finished. For each chain currently initializing, there is an asynchronous function running
   * in the background that waits on this promise and will transition the chain to a {ReadyChain}.
   *
   * The `Promise` is stored here so that this asynchronous function can make sure that the chain
   * found in {Sandbox.chains} is still the same as the one that we waited on.
   * For example, if the user adds a chain with id "foo", then removes the chain with id "foo",
   * then adds another chain with id "foo", then once the first chain has finished its
   * initialization it will notice that the `Promise` here is not the same as the one it has.
   */
  smoldotChain: Promise<SmoldotChain>
}

interface ReadyChain {
  /**
   * Used to differentiate {ReadyChain} from {InitializingChain}.
   */
  isReady: true

  /**
   * Name of the chain found in its chain specification.
   *
   * Beware that this is untrusted user input.
   */
  name: string

  /**
   * Chain stored within the {ConnectionManager.#client}.
   */
  smoldotChain: SmoldotChain

  /**
   * Whether the chain is still in its syncing phase.
   */
  isSyncing: boolean

  /**
   * Latest known number of peers the chain is connected to.
   */
  peers: number
}

export type ToSandbox = ToSandboxAddWellKnownChain | ToSandboxDatabaseContent

export interface ToSandboxAddWellKnownChain {
  origin: "trusted-user"
  type: "add-well-known-chain-with-db"
  chainId: string
  chainName: string
  databaseContent?: string
}

/**
 * Query the database content of the given chain.
 *
 * Must not be sent before a {@link ToApplicationChainReady} message has been received.
 *
 * If the chain isn't known by the connection manager, this message is silently discarded. This is
 * necessary in order to avoid race conditions, as the connection manager might have sent a
 * {@link ToApplicationError} message at the same time as this message has been sent.
 */
export interface ToSandboxDatabaseContent {
  origin: "trusted-user"
  type: "database-content"
  chainId: string
  sizeLimit?: number
}
