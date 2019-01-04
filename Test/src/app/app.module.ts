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
import { FormsModule } from '@angular/forms';
import { PlotlyModule } from 'angular-plotly.js';

import { AppComponent } from './app.component';
import { CreateConnectionComponent } from './create-connection/create-connection.component';
import { StockAndIndexPriceComponent } from './stock-and-index-price/stock-and-index-price.component';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateConnectionComponent,
    StockAndIndexPriceComponent,
    MutualFundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    PlotlyModule,
    HttpModule,
    FormsModule,
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
     }
   ])
  ],
  providers: [HttpErrorHandler, MessageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
