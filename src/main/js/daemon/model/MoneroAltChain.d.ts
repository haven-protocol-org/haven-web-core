export = MoneroAltChain;
/**
 * Models an alternative chain seen by the node.
 */
declare class MoneroAltChain {
    constructor(state: any);
    state: any;
    toJson(): any;
    getBlockHashes(blockHashes: any): any;
    setBlockHashes(blockHashes: any): MoneroAltChain;
    getDifficulty(): any;
    setDifficulty(difficulty: any): MoneroAltChain;
    getHeight(): any;
    setHeight(height: any): MoneroAltChain;
    getLength(): any;
    setLength(length: any): MoneroAltChain;
    getMainChainParentBlockHash(): any;
    setMainChainParentBlockHash(mainChainParentBlockHash: any): MoneroAltChain;
}
