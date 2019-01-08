export interface IResponse {
    httpStatus: string;
    message : string[];
    data: any;
    defaultErrorMsg: string;
}