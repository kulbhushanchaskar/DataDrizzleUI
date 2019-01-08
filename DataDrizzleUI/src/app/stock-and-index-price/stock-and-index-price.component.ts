import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { StockAndIndexPriceService } from './stock-and-index-price.service';
import { IResponse } from '../IResponse.';

declare const Plotly;

@Component({
  selector: 'app-stock-and-index-price',
  templateUrl: './stock-and-index-price.component.html',
  styleUrls: ['./stock-and-index-price.component.css']
})
export class StockAndIndexPriceComponent implements OnInit {

  constructor(private stockRealTimeIndexService: StockAndIndexPriceService) { }

  ngOnInit() {
    let companyNameList: string[] = ["AAPL","MSFT","HSBA.L"];
    this.stockRealTimeIndexService.getStockAndIndexPrice(companyNameList)    
    .subscribe(response => this.createChart(response));
  }

  createChart(response: IResponse) {
    console.log(response);
    let layout = {barmode: 'group'};
    
    Plotly.newPlot('myDiv', response.data, layout);

    }


}
