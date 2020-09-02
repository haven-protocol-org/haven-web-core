export = MoneroCheckTx;
declare const MoneroCheckTx_base: typeof import("./MoneroCheck");
/**
 * Results from checking a transaction key.
 *
 * @extends {MoneroCheck}
 */
declare class MoneroCheckTx extends MoneroCheckTx_base {
    constructor(state: any);
    toJson(): any;
    inTxPool(): any;
    setInTxPool(inTxPool: any): MoneroCheckTx;
    getNumConfirmations(): any;
    setNumConfirmations(numConfirmations: any): MoneroCheckTx;
    getReceivedAmount(): any;
    setReceivedAmount(receivedAmount: any): MoneroCheckTx;
}
