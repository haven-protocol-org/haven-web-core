export = MoneroUtils;
/**
 * Collection of Monero utilities.
 *
 * @hideconstructor
 */
declare class MoneroUtils {
    static validateMnemonic(mnemonic: any): void;
    static validatePrivateViewKey(privateViewKey: any): void;
    static validatePrivateSpendKey(privateSpendKey: any): void;
    static validatePublicViewKey(publicViewKey: any): void;
    static validatePublicSpendKey(publicSpendKey: any): void;
    static isValidAddress(address: any): boolean;
    static validateAddress(address: any): void;
    static isValidPaymentId(paymentId: any): boolean;
    static validatePaymentId(paymentId: any): void;
    /**
     * Decodes tx extra according to https://cryptonote.org/cns/cns005.txt and
     * returns the last tx pub key.
     *
     * TODO: use c++ bridge for this
     *
     * @param txExtra is an array of tx extra bytes
     * @return the last pub key as a hexidecimal string
     */
    static getLastTxPubKey(txExtra: any): any;
    /**
     * Determines if two payment ids are functionally equal.
     *
     * For example, 03284e41c342f032 and 03284e41c342f032000000000000000000000000000000000000000000000000 are considered equal.
     *
     * @param paymentId1 is a payment id to compare
     * @param paymentId2 is a payment id to compare
     * @return true if the payment ids are equal, false otherwise
     */
    static paymentIdsEqual(paymentId1: any, paymentId2: any): boolean;
    /**
     * Merges a transaction into a list of existing transactions.
     *
     * @param txs are existing transactions to merge into
     * @param tx is the transaction to merge into the list
     */
    static mergeTx(txs: any, tx: any): void;
    /**
     * Converts the given JSON to a binary Uint8Array using Monero's portable storage format.
     *
     * @param json is the json to convert to binary
     * @returns Uint8Array is the json converted to portable storage binary
     */
    static jsonToBinary(json: any): any;
    /**
     * Converts the given portable storage binary to JSON.
     *
     * @param uint8arr is a Uint8Array with binary data in Monero's portable storage format
     * @returns a JSON object converted from the binary data
     */
    static binaryToJson(uint8arr: any): any;
    /**
     * Converts the binary response from daemon RPC block retrieval to JSON.
     *
     * @param uint8arr is the binary response from daemon RPC when getting blocks
     * @returns a JSON object with the blocks data
     */
    static binaryBlocksToJson(uint8arr: any): any;
}
declare namespace MoneroUtils {
    const NUM_MNEMONIC_WORDS: number;
    const WALLET_REFRESH_RATE: number;
    const RING_SIZE: number;
    const MAX_REQUESTS_PER_SECOND: number;
}
