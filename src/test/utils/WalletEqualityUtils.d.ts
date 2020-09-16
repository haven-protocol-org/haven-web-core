export = WalletEqualityUtils;
/**
 * Utilities to deep compare wallets.
 */
declare class WalletEqualityUtils {
    /**
     * Compare the keys of two wallets.
     */
    static testWalletEqualityKeys(w1: any, w2: any): any;
    /**
     * Compares two wallets for equality using only on-chain data.
     *
     * This test will sync the two wallets until their height is equal to guarantee equal state.
     *
     * @param w1 a wallet to compare
     * @param w2 a wallet to compare
     */
    static testWalletEqualityOnChain(w1: any, w2: any): any;
    static _testAccountsEqualOnChain(accounts1: any, accounts2: any): any;
    static _testAccountEqualOnChain(account1: any, account2: any): any;
    static _testSubaddressesEqualOnChain(subaddresses1: any, subaddresses2: any): any;
    static testSubaddressesEqualOnChain(subaddress1: any, subaddress2: any): any;
    static _testTxWalletsEqualOnChain(txs1: any, txs2: any): any;
    static _transferDestinationInfo(src: any, tgt: any): any;
    static _testTransfersEqualOnChain(transfers1: any, transfers2: any): any;
    static _testOutputWalletsEqualOnChain(outputs1: any, outputs2: any): any;
}
