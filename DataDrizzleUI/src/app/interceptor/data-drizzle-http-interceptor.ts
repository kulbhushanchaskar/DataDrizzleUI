import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './../shared.service';

@Injectable({providedIn: 'root'})
export class DataDrizzleHttpInterceptor implements HttpInterceptor {
    constructor(private sharedService: SharedService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('request intercepeted');
        this.sharedService.getDataDrizzleRequestRespNotifier().emit(true);
        return next.handle(request);

    }

}