export = MoneroBlockTemplate;
/**
 * Monero block template to mine.
 */
declare class MoneroBlockTemplate {
    constructor(state: any);
    state: any;
    toJson(): any;
    getBlockTemplateBlob(): any;
    setBlockTemplateBlob(blockTemplateBlob: any): MoneroBlockTemplate;
    getBlockHashingBlob(): any;
    setBlockHashingBlob(blockHashingBlob: any): MoneroBlockTemplate;
    getDifficulty(): any;
    setDifficulty(difficulty: any): MoneroBlockTemplate;
    getExpectedReward(): any;
    setExpectedReward(expectedReward: any): MoneroBlockTemplate;
    getHeight(): any;
    setHeight(height: any): MoneroBlockTemplate;
    getPrevHash(): any;
    setPrevHash(prevId: any): MoneroBlockTemplate;
    getReservedOffset(): any;
    setReservedOffset(reservedOffset: any): MoneroBlockTemplate;
    getSeedHeight(): any;
    setSeedHeight(seedHeight: any): MoneroBlockTemplate;
    getSeedHash(): any;
    setSeedHash(seedHash: any): MoneroBlockTemplate;
    getNextSeedHash(): any;
    setNextSeedHash(nextSeedHash: any): MoneroBlockTemplate;
}
