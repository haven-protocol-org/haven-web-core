export = LibraryUtils;
/**
 * Collection of helper utilities for the library.
 *
 * @hideconstructor
 */
declare class LibraryUtils {
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
    static loadKeysModule(): Promise<any>;
    /**
     * Load the WebAssembly core module with caching.
     *
     * The core module is a superset of the keys module and overrides it.
     *
     * TODO: this is separate static function from loadKeysModule() because webpack cannot bundle WebWorker using runtime param for conditional import
     */
    static loadCoreModule(): Promise<any>;
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
    static setRejectUnauthorizedFn(fnId: string, fn: Function): void;
    /**
     * Indicate if unauthorized requests should be rejected.
     *
     * @param {string} fnId - uniquely identifies the function
     */
    static isRejectUnauthorized(fnId: string): any;
    /**
     * Set the path to load HsavenWebWorker.dist.js when running this library in
     * a web worker (defaults to "/HavenWebWorker1.2.36.dist.js").
     *
     * @param {string} workerDistPath - path to load HavenWebWorker1.2.36.dist.js
     */
    static setWorkerDistPath(workerDistPath: string): void;
    /**
     * Get a singleton instance of a web worker to share.
     *
     * @return {Worker} a worker to share among wallet instances
     */
    static getWorker(): Worker;
    /**
     * Invoke a web worker function and get the result with error handling.
     *
     * @param {objectId} identifies the worker object to invoke
     * @param {string} fnName is the name of the function to invoke
     * @param {Object[]} args are function arguments to invoke with
     * @return {Promise} resolves with response payload from the worker or an error
     */
    static invokeWorker(objectId: any, fnName: string, args: any[]): Promise<any>;
}
declare namespace LibraryUtils {
    export const WORKER_DIST_PATH_DEFAULT: string;
    import WORKER_DIST_PATH = WORKER_DIST_PATH_DEFAULT;
    export { WORKER_DIST_PATH };
}
