export = LibraryUtils;
/**
 * Collection of helper utilities for the library.
 *
 * @hideconstructor
 */
declare class LibraryUtils {
    /**
     * Get a default file system.  Uses an in-memory file system if running in the browser.
     *
     * @return nodejs-compatible file system
     */
    static getDefaultFs(): any;
    /**
     * Get the total memory used by WebAssembly.
     *
     * @return {int} the total memory used by WebAssembly
     */
    static getWasmMemoryUsed(): any;
    /**
     * Get the WebAssembly module in the current context (nodejs, browser main thread or worker).
     */
    static getWasmModule(): any;
    /**
     * Load the WebAssembly keys module with caching.
     */
    static loadKeysModule(): unknown;
    /**
     * Load the WebAssembly core module with caching.
     *
     * The core module is a superset of the keys module and overrides it.
     *
     * TODO: this is separate static function from loadKeysModule() because webpack cannot bundle WebWorker using runtime param for conditional import
     */
    static loadCoreModule(): unknown;
    /**
     * Private helper to initialize the wasm module with data structures to synchronize access.
     */
    static _initWasmModule(wasmModule: any): void;
    /**
     * Register a function by id which informs if unauthorized requests (e.g.
     * self-signed certificates) should be rejected.
     *
     * @param {string} fnId - unique identifier for the function
     * @param {function} fn - function to inform if unauthorized requests should be rejected
     */
    static setRejectUnauthorizedFn(fnId: string, fn: {}): void;
    /**
     * Indicate if unauthorized requests should be rejected.
     *
     * @param {string} fnId - uniquely identifies the function
     */
    static isRejectUnauthorized(fnId: string): any;
    /**
     * Get a singleton instance of a web worker to share.
     *
     * @return {Worker} a worker to share among wallet instances
     */
    static getWorker(): any;
    /**
     * Invoke a web worker function and get the result with error handling.
     *
     * @param {objectId} identifies the worker object to invoke
     * @param {string} fnName is the name of the function to invoke
     * @param {Object[]} args are function arguments to invoke with
     * @return {Promise} resolves with response payload from the worker or an error
     */
    static invokeWorker(objectId: any, fnName: string, args: any[]): any;
}
