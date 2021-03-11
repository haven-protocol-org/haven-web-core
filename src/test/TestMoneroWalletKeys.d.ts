export = TestMoneroWalletKeys;
/**
 * Tests the implementation of MoneroWallet which only manages keys using WebAssembly.
 */
declare class TestMoneroWalletKeys extends TestMoneroWalletCommon {
    constructor(config: any);
    runTests(): void;
    _testWalletKeys(): void;
}
import TestMoneroWalletCommon = require("./TestMoneroWalletCommon");
