export interface IResponse<T> {
    response: T;
    error: string;
    message: string;
}