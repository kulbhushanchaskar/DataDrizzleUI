import { Component, OnInit,ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MutualFundService } from './mutual-fund.service';
import { IResponse } from '../IResponse.';

declare const Plotly;

@Component({
  selector: 'app-mutual-fund',
  templateUrl: './mutual-fund.component.html',
  styleUrls: ['./mutual-fund.component.css'],
  //template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>'
})
export class MutualFundComponent implements OnInit {

  public response: IResponse;
  public layout: any;
  public graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}
  };

  constructor(private mutualFundService: MutualFundService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.response = {httpStatus: null, message: null, data:null, defaultErrorMsg: null };
    let companyNameList: string[] = ["AAAAX","AAADX","AAAGX"];
    this.mutualFundService.getMutualFundIndexes(companyNameList).subscribe(response => this.createChart(response));
  }

  createChart(response: IResponse) {
    this.response = response;
    console.log(response);
    this.layout = {barmode: 'group'};
    this.cd.detectChanges();
    //Plotly.newPlot('myDiv', response.data, layout);

    }


}
