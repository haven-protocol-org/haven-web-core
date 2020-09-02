export = SslOptions;
/**
 * SSL options for remote endpoints.
 */
declare class SslOptions {
    constructor(state: any);
    state: any;
    getPrivateKeyPath(): any;
    setPrivateKeyPath(privateKeyPath: any): SslOptions;
    getCertificatePath(): any;
    setCertificatePath(certificatePath: any): SslOptions;
    getCertificateAuthorityFile(): any;
    setCertificateAuthorityFile(certificateAuthorityFile: any): SslOptions;
    getAllowedFingerprints(): any;
    setAllowedFingerprints(allowedFingerprints: any): SslOptions;
    getAllowAnyCert(): any;
    setAllowAnyCert(allowAnyCert: any): SslOptions;
}
