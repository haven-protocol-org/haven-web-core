export = TestMoneroWalletWasm;
/**
 * Tests a Monero wallet using WebAssembly to bridge to monero-project's wallet2.
 */
declare class TestMoneroWalletWasm extends TestMoneroWalletCommon {
    static _getRandomWalletPath(): string;
    static _testWalletEqualityOnChain(wallet1: any, wallet2: any): Promise<void>;
    constructor(testConfig: any);
    getWalletGt(): Promise<any>;
    runTests(): void;
    _testWalletWasm(): void;
}
import TestMoneroWalletCommon = require("./TestMoneroWalletCommon");
