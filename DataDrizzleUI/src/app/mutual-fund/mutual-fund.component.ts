import { Component, OnInit,ChangeDetectorRef, Input} from '@angular/core';
import { MutualFundService } from './mutual-fund.service';
import { IResponse } from '../IResponse.';
import { AppComponent } from './../app.component';

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
  @Input() mutualFundComp: AppComponent;

  constructor(private mutualFundService: MutualFundService, private cd: ChangeDetectorRef) { 

    this.mutualFundService.cartData.subscribe(
      (companyNameList: string[]) => {
        this.prepareChart(companyNameList);
      });

  }

  ngOnInit() {
    //this.response = {httpStatus: null, message: null, data:null, defaultErrorMsg: null };
    let companyNameList: string[] = ["AAAAX","AAADX","AAAGX"];
  }
  
  prepareChart(companyNameList: string[]) {
    this.mutualFundService.getMutualFundIndexes(companyNameList).subscribe(response => this.drawChart(response));
  }

  drawChart(response: IResponse) {
    this.response = response;
    console.log(response);
    this.layout = {barmode: 'group'};
    this.cd.detectChanges();
    //Plotly.newPlot('myDiv', response.data, layout);
    //this.mutualFundComp.testMethod();

    }


}
