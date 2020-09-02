export = MoneroOutput;
/**
 * Models a Monero transaction output.
 *
 * @class
 */
declare class MoneroOutput {
    /**
     * Construct the model.
     *
     * @param {MoneroOutput|object} state is existing state to initialize from (optional)
     */
    constructor(state: MoneroOutput | object);
    state: any;
    getTx(): any;
    setTx(tx: any): MoneroOutput;
    getKeyImage(): any;
    setKeyImage(keyImage: any): MoneroOutput;
    getAmount(): any;
    setAmount(amount: any): MoneroOutput;
    getIndex(): any;
    setIndex(index: any): MoneroOutput;
    getRingOutputIndices(): any;
    setRingOutputIndices(ringOutputIndices: any): MoneroOutput;
    getStealthPublicKey(): any;
    setStealthPublicKey(stealthPublicKey: any): MoneroOutput;
    copy(): MoneroOutput;
    toJson(): any;
    merge(output: any): MoneroOutput;
    toString(indent?: number): string;
}
