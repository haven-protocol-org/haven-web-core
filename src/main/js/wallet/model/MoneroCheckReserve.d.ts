export = MoneroCheckReserve;
declare const MoneroCheckReserve_base: typeof import("./MoneroCheck");
/**
 * Results from checking a reserve proof.
 *
 * @extends {MoneroCheck}
 */
declare class MoneroCheckReserve extends MoneroCheckReserve_base {
    constructor(state: any);
    toJson(): any;
    getTotalAmount(): any;
    setTotalAmount(totalAmount: any): MoneroCheckReserve;
    getUnconfirmedSpentAmount(): any;
    setUnconfirmedSpentAmount(unconfirmedSpentAmount: any): MoneroCheckReserve;
}
