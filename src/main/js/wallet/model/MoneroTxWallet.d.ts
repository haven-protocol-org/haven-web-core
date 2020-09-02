export = MoneroTxWallet;
declare const MoneroTxWallet_base: typeof import("../../daemon/model/MoneroTx");
/**
 * Models a Monero transaction with wallet extensions.
 *
 * @class
 * @extends {MoneroTx}
 */
declare class MoneroTxWallet extends MoneroTxWallet_base {
    static _mergeIncomingTransfer(transfers: any, transfer: any): void;
    /**
     * Construct the model.
     *
     * @param {MoneroTxWallet|object} state is existing state to initialize from (optional)
     */
    constructor(state: MoneroTxWallet | object);
    getTxSet(): any;
    setTxSet(txSet: any): MoneroTxWallet;
    isIncoming(): any;
    setIsIncoming(isIncoming: any): MoneroTxWallet;
    isOutgoing(): any;
    setIsOutgoing(isOutgoing: any): MoneroTxWallet;
    getIncomingAmount(): any;
    getOutgoingAmount(): any;
    getTransfers(transferQuery: any): any[];
    filterTransfers(transferQuery: any): any[];
    getIncomingTransfers(): any;
    setIncomingTransfers(incomingTransfers: any): MoneroTxWallet;
    getOutgoingTransfer(): any;
    setOutgoingTransfer(outgoingTransfer: any): MoneroTxWallet;
    filterOutputs(outputQuery: any): any[];
    getNote(): any;
    setNote(note: any): MoneroTxWallet;
    isLocked(): any;
    setIsLocked(isLocked: any): MoneroTxWallet;
    getInputSum(): any;
    setInputSum(inputSum: any): MoneroTxWallet;
    getOutputSum(): any;
    setOutputSum(outputSum: any): MoneroTxWallet;
    getChangeAddress(): any;
    setChangeAddress(changeAddress: any): MoneroTxWallet;
    getChangeAmount(): any;
    setChangeAmount(changeAmount: any): MoneroTxWallet;
    getNumDummyOutputs(): any;
    setNumDummyOutputs(numDummyOutputs: any): MoneroTxWallet;
    getExtraHex(): any;
    setExtraHex(extraHex: any): MoneroTxWallet;
}
