export = TestMoneroWalletRpc;
/**
 * Tests the Monero Wallet RPC client and server.
 */
declare class TestMoneroWalletRpc extends TestMoneroWalletCommon {
    constructor(testConfig: any);
    runTests(): void;
    _testWalletRpc(config: any): void;
}
import TestMoneroWalletCommon = require("./TestMoneroWalletCommon");
