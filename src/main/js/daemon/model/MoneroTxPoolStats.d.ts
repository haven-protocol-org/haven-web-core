export = MoneroTxPoolStats;
/**
 * Models transaction pool statistics.
 */
declare class MoneroTxPoolStats {
    constructor(state: any);
    state: any;
    toJson(): any;
    getNumTxs(): any;
    setNumTxs(numTxs: any): MoneroTxPoolStats;
    getNumNotRelayed(): any;
    setNumNotRelayed(numNotRelayed: any): MoneroTxPoolStats;
    getNumFailing(): any;
    setNumFailing(numFailing: any): MoneroTxPoolStats;
    getNumDoubleSpends(): any;
    setNumDoubleSpends(numDoubleSpends: any): MoneroTxPoolStats;
    getNum10m(): any;
    setNum10m(num10m: any): MoneroTxPoolStats;
    getFeeTotal(): any;
    setFeeTotal(feeTotal: any): MoneroTxPoolStats;
    getBytesMax(): any;
    setBytesMax(bytesMax: any): MoneroTxPoolStats;
    getBytesMed(): any;
    setBytesMed(bytesMed: any): MoneroTxPoolStats;
    getBytesMin(): any;
    setBytesMin(bytesMin: any): MoneroTxPoolStats;
    getBytesTotal(): any;
    setBytesTotal(bytesTotal: any): MoneroTxPoolStats;
    getHisto(): any;
    setHisto(histo: any): MoneroTxPoolStats;
    getHisto98pc(): any;
    setHisto98pc(histo98pc: any): MoneroTxPoolStats;
    getOldestTimestamp(): any;
    setOldestTimestamp(oldestTimestamp: any): MoneroTxPoolStats;
}
