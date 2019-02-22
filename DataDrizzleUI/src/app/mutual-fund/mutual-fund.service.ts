import { Injectable, EventEmitter } from '@angular/core';
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
export class MutualFundService {
  appUrl = 'http://localhost:8090//mutualfund';  // URL to web api
  private handleError: HandleError;
  cartData = new EventEmitter<any>();
  private mutualFundCompaniesLstEvent = new EventEmitter<string[]>();

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('MutualFundService');
  }

  getMutualFundCompaniesLstEvent() : EventEmitter<string[]>{
    return this.mutualFundCompaniesLstEvent;
  }

  broadCastMutualFundCompaniesLst() {
    this.getMutualFundCompanies().subscribe(response => {
      this.mutualFundCompaniesLstEvent.emit(response.data);
    });
  }

  getMutualFundIndexes(companyNames: string[]) : Observable<IResponse> {

    const safeErrorMsg: IResponse = {httpStatus: null, message: null, data:null, defaultErrorMsg: "Technical difficulties" };

    return this.http.post<IResponse>(this.appUrl, companyNames, httpOptions)
      .pipe(
        catchError(this.handleError('getStockAndIndexPrice', safeErrorMsg))
      );
  }

  getMutualFundCompanies() : Observable<IResponse> {
    const safeErrorMsg: IResponse = {httpStatus: null, message: null, data:null, defaultErrorMsg: "Technical difficulties" };

    return this.http.post<IResponse>(this.appUrl + "/getMutualFundSymbols", null, httpOptions)
          .pipe(
            catchError(this.handleError('getStockAndIndexPrice', safeErrorMsg))
          );
  }

}