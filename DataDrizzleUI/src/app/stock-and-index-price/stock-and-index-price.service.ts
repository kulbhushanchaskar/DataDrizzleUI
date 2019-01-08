import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { IResponse } from '../IResponse.';


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
export class StockAndIndexPriceService {
  appUrl = 'http://localhost:8090//stock/getStockPrice';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('StockAndIndexPriceService');
  }

  getStockAndIndexPrice(companyNames: string[]) : Observable<IResponse> {

    const safeErrorMsg: IResponse = {httpStatus: null, message: null, data:null, defaultErrorMsg: "Technical difficulties" };

    return this.http.post<IResponse>(this.appUrl, companyNames, httpOptions)
      .pipe(
        catchError(this.handleError('createConnection', safeErrorMsg))
      );
  }

}
