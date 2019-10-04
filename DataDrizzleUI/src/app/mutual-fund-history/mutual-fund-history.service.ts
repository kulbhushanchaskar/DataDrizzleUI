import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../i.response';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MutualFundHistoryService {
  appUrl: string = 'http://localhost:8090/mutualfund';
  private handleError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('MutualFundHistoryService');
   }

  /*getMutualFundHistory(symbol: string) {
    const safeErrorMsg: IResponse<String> = {httpStatus: null, message: any, data:null, defaultErrorMsg: "Technical difficulties" };

    return this.http.post<IResponse<String>>(this.appUrl + "/history", symbol, httpOptions)
          .pipe(
            catchError(this.handleError('getMutualFundHistory', safeErrorMsg))
          );
  }*/
}
