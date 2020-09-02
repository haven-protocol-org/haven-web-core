export = MoneroOutgoingTransfer;
declare const MoneroOutgoingTransfer_base: typeof import("./MoneroTransfer");
/**
 * Models an outgoing transfer of funds from the wallet.
 *
 * @extends {MoneroTransfer}
 */
declare class MoneroOutgoingTransfer extends MoneroOutgoingTransfer_base {
    /**
     * Construct the model.
     *
     * @param {MoneroOutgoingTranser|object} state is existing state to initialize from (optional)
     */
    constructor(state: any | object);
    getSubaddressIndices(): any;
    setSubaddressIndices(subaddressIndices: any): MoneroOutgoingTransfer;
    getAddresses(): any;
    setAddresses(addresses: any): MoneroOutgoingTransfer;
    getDestinations(): any;
    setDestinations(destinations: any): MoneroOutgoingTransfer;
}
