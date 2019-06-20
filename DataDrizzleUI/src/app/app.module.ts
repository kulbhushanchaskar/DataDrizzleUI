import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlotlyModule } from 'angular-plotly.js';

import { AppComponent } from './app.component';
import { CreateConnectionComponent } from './create-connection/create-connection.component';
import { StockAndIndexPriceComponent } from './stock-and-index-price/stock-and-index-price.component';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarDirective } from './sidebar.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataDrizzleHttpInterceptor } from './interceptor/data-drizzle-http-interceptor';
import { DataDrizzleHttpRespInterceptor } from './interceptor/data-dirzzle-http-resp-interceptor';
import { MutualFundHistoryComponent } from './mutual-fund-history/mutual-fund-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateConnectionComponent,
    StockAndIndexPriceComponent,
    MutualFundComponent,
    NavbarComponent,
    SidebarDirective,
    MutualFundHistoryComponent
  ],
  imports: [
    BrowserModule,
    PlotlyModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {
         path: 'create-connection',
         component: CreateConnectionComponent
      },
      {
        path: 'stock-and-index-price',
        component: StockAndIndexPriceComponent
     },
     {
       path: 'mutual-fund',
       component: MutualFundComponent
     },
     {
       path:'mutual-fund-history/:symbol',
       component:MutualFundHistoryComponent
     }
   ]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [HttpErrorHandler, MessageService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: DataDrizzleHttpInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: DataDrizzleHttpRespInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
