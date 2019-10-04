import { Component, OnInit,ChangeDetectorRef, Input} from '@angular/core';
import { MutualFundService } from './mutual-fund.service';
import { IResponse } from '../i.response';
import { AppComponent } from './../app.component';
import { SharedService } from './../shared.service';

declare const Plotly;

@Component({
  selector: 'app-mutual-fund',
  templateUrl: './mutual-fund.component.html',
  styleUrls: ['./mutual-fund.component.css'],
  //template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>'
})
export class MutualFundComponent implements OnInit {

  public response: IResponse<any>;
  public layout: any;
  isLoadingResponse : boolean;
  @Input() mutualFundComp: AppComponent;

  constructor(private mutualFundService: MutualFundService, private cd: ChangeDetectorRef, private sharedService: SharedService) { 

    /*this.mutualFundService.cartData.subscribe(
      (companyNameList: string[]) => {
        this.prepareChart(companyNameList);
      });*/

      this.sharedService.getDataDrizzleRequestRespNotifier().subscribe(
        (isLoadingResponse) => {
           this.isLoadingResponse = isLoadingResponse; 
        });
  }

  ngOnInit() {
    /*this.mutualFundService.broadCastMutualFundCompaniesLst();
    this.sharedService.broadCastCurrentCoponent("mutual-fund");*/
  }
  
  prepareChart(companyNameList: string[]) {
   // this.mutualFundService.getMutualFundIndexes(companyNameList).subscribe(response => this.drawChart(response));
  }

  drawChart(response: IResponse<any>) {
    this.response = response;
    console.log(response);
    this.layout = {barmode: 'group'};
    this.cd.detectChanges();
    }


}
