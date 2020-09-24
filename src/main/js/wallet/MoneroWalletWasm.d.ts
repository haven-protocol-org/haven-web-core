export = MoneroWalletWasm;
declare const MoneroWalletWasm_base: typeof import("./MoneroWalletKeys");
/**
 * Implements a MoneroWallet using WebAssembly bindings to monero-project's wallet2.
 *
 * @extends {MoneroWalletKeys}
 * @implements {MoneroWallet}
 * @hideconstructor
 */
declare class MoneroWalletWasm extends MoneroWalletWasm_base {
    /**
     * Check if a wallet exists at a given path.
     *
     * @param {string} path - path of the wallet on the file system
     * @param {fs} - Node.js compatible file system to use (optional, defaults to disk if nodejs)
     * @return {boolean} true if a wallet exists at the given path, false otherwise
     */
    static walletExists(path: string, fs: any): boolean;
    /**
     * <p>Open an existing wallet using WebAssembly bindings to wallet2.h.</p>
     *
     * <p>Examples:<p>
     *
     * <code>
     * let wallet1 = await MoneroWalletWasm.openWallet(<br>
     * &nbsp;&nbsp; "./wallets/wallet1",<br>
     * &nbsp;&nbsp; "supersecretpassword",<br>
     * &nbsp;&nbsp; MoneroNetworkType.STAGENET,<br>
     * &nbsp;&nbsp; "http://localhost:38081" // daemon uri<br>
     * );<br><br>
     *
     * let wallet2 = await MoneroWalletWasm.openWallet({<br>
     * &nbsp;&nbsp; path: "./wallets/wallet2",<br>
     * &nbsp;&nbsp; password: "supersecretpassword",<br>
     * &nbsp;&nbsp; networkType: MoneroNetworkType.STAGENET,<br>
     * &nbsp;&nbsp; serverUri: "http://localhost:38081", // daemon configuration<br>
     * &nbsp;&nbsp; serverUsername: "superuser",<br>
     * &nbsp;&nbsp; serverPassword: "abctesting123"<br>
     * });
     * </code>
     *
     * @param {MoneroWalletConfig|object|string} configOrPath - MoneroWalletConfig or equivalent config object or a path to a wallet to open
     * @param {string} configOrPath.path - path of the wallet to open (optional if 'keysData' provided)
     * @param {string} configOrPath.password - password of the wallet to open
     * @param {string|number} configOrPath.networkType - network type of the wallet to open (one of "mainnet", "testnet", "stagenet" or MoneroNetworkType.MAINNET|TESTNET|STAGENET)
     * @param {Uint8Array} configOrPath.keysData - wallet keys data to open (optional if path provided)
     * @param {Uint8Array} configOrPath.cacheData - wallet cache data to open (optional)
     * @param {string} configOrPath.serverUri - uri of the wallet's daemon (optional)
     * @param {string} configOrPath.serverUsername - username to authenticate with the daemon (optional)
     * @param {string} configOrPath.serverPassword - password to authenticate with the daemon (optional)
     * @param {boolean} configOrPath.rejectUnauthorized - reject self-signed server certificates if true (defaults to true)
     * @param {MoneroRpcConnection|object} configOrPath.server - MoneroRpcConnection or equivalent JS object configuring the daemon connection (optional)
     * @param {boolean} configOrPath.proxyToWorker - proxies wallet operations to a web worker in order to not block the browser's main thread (default true if browser, false otherwise)
     * @param {fs} configOrPath.fs - Node.js compatible file system to use (defaults to disk or in-memory FS if browser)
     * @param {string} password - password of the wallet to open
     * @param {string|number} networkType - network type of the wallet to open
     * @param {string|MoneroRpcConnection} daemonUriOrConnection - daemon URI or MoneroRpcConnection
     * @param {boolean} proxyToWorker - proxies wallet operations to a web worker in order to not block the browser's main thread (default true if browser, false otherwise)
     * @param {fs} fs - Node.js compatible file system to use (defaults to disk or in-memory FS if browser)
     * @return {MoneroWalletWasm} the opened wallet
     */
    static openWallet(configOrPath: import("./model/MoneroWalletConfig") | object | string, password: string, networkType: string | number, daemonUriOrConnection: string | import("../common/MoneroRpcConnection"), proxyToWorker: boolean, fs: any): MoneroWalletWasm;
    /**
     * <p>Create a wallet using WebAssembly bindings to wallet2.h.<p>
     *
     * <p>Example:</p>
     *
     * <code>
     * let wallet = await MoneroWalletWasm.createWallet({<br>
     * &nbsp;&nbsp; path: "./test_wallets/wallet1", // leave blank for in-memory wallet<br>
     * &nbsp;&nbsp; password: "supersecretpassword",<br>
     * &nbsp;&nbsp; networkType: MoneroNetworkType.STAGENET,<br>
     * &nbsp;&nbsp; mnemonic: "coexist igloo pamphlet lagoon...",<br>
     * &nbsp;&nbsp; restoreHeight: 1543218,<br>
     * &nbsp;&nbsp; server: new MoneroRpcConnection("http://localhost:38081", "daemon_user", "daemon_password_123"),<br>
     * });
     * </code>
     *
     * @param {object|MoneroWalletConfig} config - MoneroWalletConfig or equivalent config object
     * @param {string} config.path - path of the wallet to create (optional, in-memory wallet if not given)
     * @param {string} config.password - password of the wallet to create
     * @param {string|number} config.networkType - network type of the wallet to create (one of "mainnet", "testnet", "stagenet" or MoneroNetworkType.MAINNET|TESTNET|STAGENET)
     * @param {string} config.mnemonic - mnemonic of the wallet to create (optional, random wallet created if neither mnemonic nor keys given)
     * @param {string} config.seedOffset - the offset used to derive a new seed from the given mnemonic to recover a secret wallet from the mnemonic phrase
     * @param {string} config.primaryAddress - primary address of the wallet to create (only provide if restoring from keys)
     * @param {string} config.privateViewKey - private view key of the wallet to create (optional)
     * @param {string} config.privateSpendKey - private spend key of the wallet to create (optional)
     * @param {number} config.restoreHeight - block height to start scanning from (defaults to 0 unless generating random wallet)
     * @param {string} config.language - language of the wallet's mnemonic phrase (defaults to "English" or auto-detected)
     * @param {string} config.serverUri - uri of the wallet's daemon (optional)
     * @param {string} config.serverUsername - username to authenticate with the daemon (optional)
     * @param {string} config.serverPassword - password to authenticate with the daemon (optional)
     * @param {boolean} config.rejectUnauthorized - reject self-signed server certificates if true (defaults to true)
     * @param {MoneroRpcConnection|object} config.server - MoneroRpcConnection or equivalent JS object providing daemon configuration (optional)
     * @param {boolean} config.proxyToWorker - proxies wallet operations to a web worker in order to not block the browser's main thread (default true if browser, false otherwise)
     * @param {fs} config.fs - Node.js compatible file system to use (defaults to disk or in-memory FS if browser)
     * @return {MoneroWalletWasm} the created wallet
     */
    static createWallet(config: object | import("./model/MoneroWalletConfig")): MoneroWalletWasm;
    static _createWalletRandom(path: any, password: any, networkType: any, daemonUriOrConnection: any, language: any, proxyToWorker: any, fs: any): unknown;
    static _createWalletFromMnemonic(path: any, password: any, networkType: any, mnemonic: any, daemonUriOrConnection: any, restoreHeight: any, seedOffset: any, proxyToWorker: any, fs: any): unknown;
    static _createWalletFromKeys(path: any, password: any, networkType: any, address: any, viewKey: any, spendKey: any, daemonUriOrConnection: any, restoreHeight: any, language: any, proxyToWorker: any, fs: any): unknown;
    static _getFs(): any;
    static _openWalletData(path: any, password: any, networkType: any, keysData: any, cacheData: any, daemonUriOrConnection: any, proxyToWorker: any, fs: any): unknown;
    static _sanitizeBlock(block: any): any;
    static _sanitizeTxWallet(tx: any): any;
    static _sanitizeAccount(account: any): any;
    static _sanitizeSubaddress(subaddress: any): any;
    static _deserializeBlocks(blocksJsonStr: any): {
        blocks: {};
        missingTxHashes: {};
    };
    static _deserializeTxs(query: any, blocksJsonStr: any, missingTxHashes: any): {};
    static _deserializeTransfers(query: any, blocksJsonStr: any): {};
    static _deserializeOutputs(query: any, blocksJsonStr: any): {};
    /**
     * Internal constructor which is given the memory address of a C++ wallet
     * instance.
     *
     * This method should not be called externally but should be called through
     * static wallet creation utilities in this class.
     *
     * @param {int} cppAddress - address of the wallet instance in C++
     * @param {string} path - path of the wallet instance
     * @param {string} password - password of the wallet instance
     * @param {FileSystem} fs - node.js-compatible file system to read/write wallet files
     * @param {boolean} rejectUnauthorized - specifies if unauthorized requests (e.g. self-signed certificates) should be rejected
     * @param {string} rejectUnauthorizedFnId - unique identifier for http_client_wasm to query rejectUnauthorized
     */
    constructor(cppAddress: any, path: string, password: string, fs: any, rejectUnauthorized: boolean, rejectUnauthorizedFnId: string);
    _path: string;
    _password: string;
    _listeners: {};
    _fs: any;
    _isClosed: boolean;
    _wasmListener: WalletWasmListener;
    _wasmListenerHandle: number;
    _rejectUnauthorized: boolean;
    _rejectUnauthorizedConfigId: string;
    /**
     * Get the maximum height of the peers the wallet's daemon is connected to.
     *
     * @return {number} the maximum height of the peers the wallet's daemon is connected to
     */
    getDaemonMaxPeerHeight(): number;
    /**
     * Indicates if the wallet's daemon is synced with the network.
     *
     * @return {boolean} true if the daemon is synced with the network, false otherwise
     */
    isDaemonSynced(): boolean;
    /**
     * Indicates if the wallet is synced with the daemon.
     *
     * @return {boolean} true if the wallet is synced with the daemon, false otherwise
     */
    isSynced(): boolean;
    /**
     * Get the wallet's network type (mainnet, testnet, or stagenet).
     *
     * @return {MoneroNetworkType} the wallet's network type
     */
    getNetworkType(): import("../daemon/model/MoneroNetworkType");
    /**
     * Get the height of the first block that the wallet scans.
     *
     * @return {number} the height of the first block that the wallet scans
     */
    getSyncHeight(): number;
    /**
     * Set the height of the first block that the wallet scans.
     *
     * @param {number} syncHeight - height of the first block that the wallet scans
     */
    setSyncHeight(syncHeight: number): unknown;
    /**
     * Register a listener to receive wallet notifications.
     *
     * @param {MoneroWalletListener} listener - listener to receive wallet notifications
     */
    addListener(listener: import("./model/MoneroWalletListener")): any;
    /**
     * Unregister a listener to receive wallet notifications.
     *
     * @param {MoneroWalletListener} listener - listener to unregister
     */
    removeListener(listener: import("./model/MoneroWalletListener")): any;
    /**
     * Get the listeners registered with the wallet.
     *
     * @return {MoneroWalletListener[]} the registered listeners
     */
    getListeners(): import("./model/MoneroWalletListener")[];
    /**
     * Move the wallet from its current path to the given path.
     *
     * @param {string} path is the new wallet's path
     * @param {string} password is the new wallet's password
     */
    moveTo(path: string, password: string): any;
    _syncingEnabled: boolean;
    /**
     * Get the wallet's keys and cache data.
     *
     * @return {DataView[]} is the keys and cache data respectively
     */
    getData(): any[];
    /**
     * Loop while syncing enabled.
     */
    _runSyncLoop(): any;
    _syncLoopRunning: boolean;
    /**
     * Enables or disables listening in the c++ wallet.
     */
    _setIsListening(isEnabled: any): unknown;
    /**
     * Set the path of the wallet on the browser main thread if run as a web worker.
     *
     * @param {string} browserMainPath - path of the wallet on the browser main thread
     */
    _setBrowserMainPath(browserMainPath: string): void;
    _browserMainPath: string;
}
/**
 * Receives notifications directly from wasm c++.
 *
 * @private
 */
declare class WalletWasmListener {
    constructor(wallet: any);
    _wallet: any;
    onSyncProgress(height: any, startHeight: any, endHeight: any, percentDone: any, message: any): void;
    onNewBlock(height: any): void;
    onBalancesChanged(newBalanceStr: any, newUnlockedBalanceStr: any): void;
    onOffshoreBalancesChanged(newOffshoreBalanceStr: any, newUnlockedOffshoreBalanceStr: any): void;
    onOutputReceived(height: any, txHash: any, amountStr: any, accountIdx: any, subaddressIdx: any, version: any, unlockHeight: any, isLocked: any): void;
    onOutputSpent(height: any, txHash: any, amountStr: any, accountIdx: any, subaddressIdx: any, version: any): void;
}
