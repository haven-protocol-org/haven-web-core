export = WalletSyncPrinter;
/**
 * Print sync progress every X blocks.
 */
declare class WalletSyncPrinter extends MoneroWalletListener {
    constructor(syncResolution: any);
    nextIncrement: number;
    syncResolution: any;
}
import MoneroWalletListener = require("../../main/js/wallet/model/MoneroWalletListener");
