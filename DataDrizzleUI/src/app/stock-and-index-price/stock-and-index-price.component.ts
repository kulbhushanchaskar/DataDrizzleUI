import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { StockAndIndexPriceService } from './stock-and-index-price.service';
import { IResponse } from '../IResponse.';
import { SharedService } from './../shared.service';

declare const Plotly;

@Component({
  selector: 'app-stock-and-index-price',
  templateUrl: './stock-and-index-price.component.html',
  styleUrls: ['./stock-and-index-price.component.css']
})
export class StockAndIndexPriceComponent implements OnInit {

  constructor(private stockRealTimeIndexService: StockAndIndexPriceService, private sharedService: SharedService) { }

  ngOnInit() {
    let companyNameList: string[] = ["AAPL","MSFT","HSBA.L"];
    this.stockRealTimeIndexService.getStockAndIndexPrice(companyNameList)    
    .subscribe(response => this.createChart(response));

    this.sharedService.broadCastCurrentCoponent("stock-and-index-price");

  }

  createChart(response: IResponse) {
    console.log(response);
    let layout = {barmode: 'group'};
    
    Plotly.newPlot('myDiv', response.data, layout);

    }


}
