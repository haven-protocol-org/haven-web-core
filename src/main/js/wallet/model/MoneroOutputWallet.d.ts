export = MoneroOutputWallet;
declare const MoneroOutputWallet_base: typeof import("../../daemon/model/MoneroOutput");
/**
 * Models a Monero output with wallet extensions.
 *
 * @class
 * @extends {MoneroOutput}
 */
declare class MoneroOutputWallet extends MoneroOutputWallet_base {
    /**
     * Construct the model.
     *
     * @param {MoneroOutputWallet|object} state is existing state to initialize from (optional)
     */
    constructor(state: MoneroOutputWallet | object);
    getAccountIndex(): any;
    setAccountIndex(accountIndex: any): MoneroOutputWallet;
    getSubaddressIndex(): any;
    setSubaddressIndex(subaddressIndex: any): MoneroOutputWallet;
    isSpent(): any;
    setIsSpent(isSpent: any): MoneroOutputWallet;
    /**
     * Indicates if this output has been deemed 'malicious' and will therefore
     * not be spent by the wallet.
     *
     * @return Boolean is whether or not this output is frozen
     */
    isFrozen(): any;
    setIsFrozen(isFrozen: any): MoneroOutputWallet;
    isLocked(): any;
}
