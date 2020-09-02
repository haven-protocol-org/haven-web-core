export = MoneroSubmitTxResult;
/**
 * Models the result from submitting a tx to a daemon.
 */
declare class MoneroSubmitTxResult {
    constructor(state: any);
    state: any;
    toJson(): any;
    isGood(): any;
    setIsGood(isGood: any): MoneroSubmitTxResult;
    isRelayed(): any;
    setIsRelayed(isRelayed: any): MoneroSubmitTxResult;
    isDoubleSpendSeen(): any;
    setIsDoubleSpend(isDoubleSpendSeen: any): MoneroSubmitTxResult;
    isFeeTooLow(): any;
    setIsFeeTooLow(isFeeTooLow: any): MoneroSubmitTxResult;
    isMixinTooLow(): any;
    setIsMixinTooLow(isMixinTooLow: any): MoneroSubmitTxResult;
    hasInvalidInput(): any;
    setHasInvalidInput(hasInvalidInput: any): MoneroSubmitTxResult;
    hasInvalidOutput(): any;
    setHasInvalidOutput(hasInvalidOutput: any): MoneroSubmitTxResult;
    hasTooFewOutputs(): any;
    setHasTooFewOutputs(hasTooFewOutputs: any): MoneroSubmitTxResult;
    isOverspend(): any;
    setIsOverspend(isOverspend: any): MoneroSubmitTxResult;
    getReason(): any;
    setReason(reason: any): MoneroSubmitTxResult;
    isTooBig(): any;
    setIsTooBig(isTooBig: any): MoneroSubmitTxResult;
    getSanityCheckFailed(): any;
    setSanityCheckFailed(sanityCheckFailed: any): MoneroSubmitTxResult;
    getCredits(): any;
    setCredits(credits: any): MoneroSubmitTxResult;
    getTopBlockHash(): any;
    setTopBlockHash(topBlockHash: any): MoneroSubmitTxResult;
}
