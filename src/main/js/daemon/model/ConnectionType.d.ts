export = ConnectionType;
/**
 * Enumerates connection types.
 *
 * Based on enums.h in monero-project.
 *
 * @hideconstructor
 */
declare class ConnectionType {
    /**
     * Asserts that the given connection type is valid.
     */
    static validate(type: any): void;
    /**
     * Indicates if the given connection type is valid or not.
     */
    static isValid(type: any): true | 3;
}
declare namespace ConnectionType {
    const INVALID: number;
    const IPV4: number;
    const IPV6: number;
    const TOR: number;
    const I2P: number;
}
