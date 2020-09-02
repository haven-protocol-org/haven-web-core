export = MoneroOutputHistogramEntry;
/**
 * Entry in a Monero output histogram (see get_output_histogram of Daemon RPC documentation).
 */
declare class MoneroOutputHistogramEntry {
    constructor(state: any);
    state: any;
    toJson(): any;
    getAmount(): any;
    setAmount(amount: any): MoneroOutputHistogramEntry;
    getNumInstances(): any;
    setNumInstances(numInstances: any): MoneroOutputHistogramEntry;
    getNumUnlockedInstances(): any;
    setNumUnlockedInstances(numUnlockedInstances: any): MoneroOutputHistogramEntry;
    getNumRecentInstances(): any;
    setNumRecentInstances(numRecentInstances: any): MoneroOutputHistogramEntry;
}
