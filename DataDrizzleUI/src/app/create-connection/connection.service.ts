import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { IResponse } from '../i.response';

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
export class ConnectionService {
  appUrl = 'http://localhost:8090/create/connection';  // URL to web api

  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ConnectionService');
  }

  createConnection (connection: any): Observable<IResponse<string[]>> {
    let connectionMap = new Map<string,string>();
    connectionMap.set("connectionName",connection.connectionName);
    connectionMap.set("connectionDatabaseType",connection.databaseType);
    console.log(connectionMap);

    let connectionParameters = new Map<string,Map<string,string>>();
    connectionParameters.set("connectionParameters",connectionMap);
    let connectionJson = new String("");

    connectionJson = connectionJson.concat("{")
    .concat("\"connectionParameters\"")
    .concat(":")
    .concat(
    JSON.stringify(
      Array.from(
        connectionMap.entries()
      )
      .reduce((o, [key, value]) => { 
        o[key] = value; 
    
        return o; 
      }, {})
    ))
    .concat("}");


    console.log(connectionJson);

    connectionMap.forEach((value: string, key: string) => {
      console.log(value, key);
    });

    return this.http.post<IResponse<String>>(this.appUrl, connectionJson, httpOptions)
      .pipe(
        catchError(this.handleError('createConnection', connection))
      );


  }

  testConnection (connection: any): Observable<IResponse<string[]>> {
    let appUrl = 'http://localhost:8090/test/connection'; 

    let connectionMap = new Map<string,string>();
    connectionMap.set("connectionName",connection.connectionName.value);
    connectionMap.set("connectionDatabaseType",connection.databaseType.value);

    connectionMap.set("databaseName",connection.databaseName.value);
    connectionMap.set("username",connection.username.value);
    connectionMap.set("pwd",connection.pwd.value);

    connectionMap.set("host",connection.host.value);
    connectionMap.set("port",connection.port.value);
    console.log(connectionMap);

    let connectionParameters = new Map<string,Map<string,string>>();
    connectionParameters.set("connectionParameters",connectionMap);
    let connectionJson = new String("");

    connectionJson = connectionJson.concat("{")
    .concat("\"connectionParameters\"")
    .concat(":")
    .concat(
    JSON.stringify(
      Array.from(
        connectionMap.entries()
      )
      .reduce((o, [key, value]) => { 
        o[key] = value; 
    
        return o; 
      }, {})
    ))
    .concat("}");


    console.log(connectionJson);

    connectionMap.forEach((value: string, key: string) => {
      console.log(value, key);
    });

    return this.http.post<IResponse<String>>(appUrl, connectionJson, httpOptions)
      .pipe(
        catchError(this.handleError('createConnection', connection))
      );


  }

}