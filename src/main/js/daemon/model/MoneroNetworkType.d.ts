export = MoneroNetworkType;
/**
 * Defines the Monero network types (mainnet, testnet, and stagenet).
 *
 * @hideconstructor
 */
declare class MoneroNetworkType {
    /**
     * Asserts that the given network type is valid.
     *
     * @param {int} networkType - the network type to validate as a numeric
     */
    static validate(networkType: any): void;
    /**
     * Indicates if the given network type is valid or not.
     *
     * @param {int} networkType - the network type to validate as a numeric
     * @return {boolean} true if the network type is valid, false otherwise
     */
    static isValid(networkType: any): boolean;
    /**
     * Parse the given string as a network type.
     *
     * @param {string} networkTypeStr - "mainnet", "testnet", or "stagenet" (case insensitive)
     * @return {int} the network type as a numeric
     */
    static parse(networkTypeStr: string): any;
}
declare namespace MoneroNetworkType {
    const MAINNET: number;
    const TESTNET: number;
    const STAGENET: number;
}
