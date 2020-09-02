export = MoneroDaemonConnectionSpan;
/**
 * Monero daemon connection span.
 */
declare class MoneroDaemonConnectionSpan {
    constructor(state: any);
    state: any;
    toJson(): any;
    getConnectionId(): any;
    setConnectionId(connectionId: any): MoneroDaemonConnectionSpan;
    getNumBlocks(): any;
    setNumBlocks(numBlocks: any): MoneroDaemonConnectionSpan;
    getRemoteAddress(): any;
    setRemoteAddress(remoteAddress: any): MoneroDaemonConnectionSpan;
    getRate(): any;
    setRate(rate: any): MoneroDaemonConnectionSpan;
    getSpeed(): any;
    setSpeed(speed: any): MoneroDaemonConnectionSpan;
    getSize(): any;
    setSize(size: any): MoneroDaemonConnectionSpan;
    getStartHeight(): any;
    setStartHeight(startHeight: any): MoneroDaemonConnectionSpan;
}
