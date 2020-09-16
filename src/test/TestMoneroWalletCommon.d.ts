export = TestMoneroWalletCommon;
/**
 * Test a wallet for common functionality.
 *
 * TODO: test filtering with not relayed
 */
declare class TestMoneroWalletCommon {
    /**
     * Constructs the tester.
     *
     * @param testConfig is test configuration
     */
    constructor(testConfig: any);
    testConfig: any;
    /**
     * Get the daemon to test.
     *
     * @return the daemon to test
     */
    getTestDaemon(): unknown;
    /**
     * Get the main wallet to test.
     *
     * @return the wallet to test
     */
    getTestWallet(): any;
    /**
     * Open a test wallet with default configuration for each wallet type.
     *
     * @param config configures the wallet to open
     * @return MoneroWallet is the opened wallet
     */
    openWallet(config: any): any;
    /**
     * Create a test wallet with default configuration for each wallet type.
     *
     * @param config configures the wallet to create
     * @return MoneroWallet is the created wallet
     */
    createWallet(config: any): any;
    /**
     * Get the wallet's supported languages for the mnemonic phrase.  This is an
     * instance method for wallet rpc and a static utility for other wallets.
     *
     * @return {string[]} the wallet's supported languages
     */
    getMnemonicLanguages(): string[];
    runCommonTests(): void;
    getSubaddressesWithBalance(): unknown;
    getSubaddressesWithUnlockedBalance(): unknown;
    _testGetSubaddressAddressOutOfRange(): any;
    /**
     * Fetches and tests transactions according to the given query.
     *
     * TODO: convert query to query object and ensure each tx passes filter, same with getAndTestTransfer, getAndTestOutputs
     */
    _getAndTestTxs(wallet: any, query: any, isExpected: any): unknown;
    /**
     * Fetches and tests transfers according to the given query.
     */
    _getAndTestTransfers(wallet: any, query: any, isExpected: any): unknown;
    /**
     * Fetches and tests outputs according to the given query.
     */
    _getAndTestOutputs(wallet: any, query: any, isExpected: any): unknown;
    /**
     * Tests a wallet transaction with a test configuration.
     *
     * @param tx is the wallet transaction to test
     * @param ctx specifies test configuration
     *        ctx.wallet is used to cross reference tx info if available
     *        ctx.config specifies the tx's originating send configuration
     *        ctx.isSendResponse indicates if the tx is built from a send response, which contains additional fields (e.g. key)
     *        ctx.hasDestinations specifies if the tx has an outgoing transfer with destinations, undefined if doesn't matter
     *        ctx.includeOutputs specifies if outputs were fetched and should therefore be expected with incoming transfers
     */
    _testTxWallet(tx: any, ctx: any): any;
    _testTxWalletCopy(tx: any, ctx: any): any;
    _testMultisig(m: any, n: any, testTx: any): any;
    wallet: any;
    _synchronizeMultisigParticipants(currentWallet: any, walletIds: any): unknown;
    _testMultisigInfo(info: any, m: any, n: any): any;
}
