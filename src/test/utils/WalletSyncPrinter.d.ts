export = WalletSyncPrinter;
declare const WalletSyncPrinter_base: typeof import("../../main/js/wallet/model/MoneroWalletListener");
/**
 * Print sync progress every X blocks.
 */
declare class WalletSyncPrinter extends WalletSyncPrinter_base {
    constructor(syncResolution: any);
    nextIncrement: number;
    syncResolution: any;
}
