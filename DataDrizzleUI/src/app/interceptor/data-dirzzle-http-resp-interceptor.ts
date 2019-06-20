import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { SharedService } from './../shared.service';

@Injectable({providedIn: 'root'})
export class DataDrizzleHttpRespInterceptor implements HttpInterceptor {
    constructor(private sharedService: SharedService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    console.log("repsonse intercepted");
                    this.sharedService.getDataDrizzleRequestRespNotifier().emit(false);
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    
                    //log error 
                }
                return of(err);
            }));
        }

    }