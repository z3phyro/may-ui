export declare class FetchHelper {
    private static handleErrors;
    private static parseJSON;
    private static mergeHeaders;
    static get<T>(url: string, customHeaders?: HeadersInit): Promise<T>;
    static post<T>(url: string, data: object, customHeaders?: HeadersInit): Promise<T>;
    static put<T>(url: string, data: object, customHeaders?: HeadersInit): Promise<T>;
    static delete<T>(url: string, customHeaders?: HeadersInit): Promise<T>;
}
