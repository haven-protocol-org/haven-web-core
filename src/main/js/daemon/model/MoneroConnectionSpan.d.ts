export = MoneroConnectionSpan;
/**
 * Monero daemon connection span.
 */
declare class MoneroConnectionSpan {
    constructor(state: any);
    state: any;
    toJson(): any;
    getConnectionId(): any;
    setConnectionId(connectionId: any): MoneroConnectionSpan;
    getNumBlocks(): any;
    setNumBlocks(numBlocks: any): MoneroConnectionSpan;
    getRemoteAddress(): any;
    setRemoteAddress(remoteAddress: any): MoneroConnectionSpan;
    getRate(): any;
    setRate(rate: any): MoneroConnectionSpan;
    getSpeed(): any;
    setSpeed(speed: any): MoneroConnectionSpan;
    getSize(): any;
    setSize(size: any): MoneroConnectionSpan;
    getStartHeight(): any;
    setStartHeight(startHeight: any): MoneroConnectionSpan;
}
