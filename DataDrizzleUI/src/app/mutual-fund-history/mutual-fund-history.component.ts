import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MutualFundHistoryService } from './mutual-fund-history.service';

@Component({
  selector: 'app-mutual-fund-history',
  templateUrl: './mutual-fund-history.component.html',
  styleUrls: ['./mutual-fund-history.component.css']
})
export class MutualFundHistoryComponent implements OnInit {

  constructor(private mutualFundHistory: MutualFundHistoryService , private route: ActivatedRoute) { }

  ngOnInit() {
    /*console.log("in init of MutualFundHistoryComponent");
    this.route.params.subscribe((parameters) => this.getMutualFundHistoryPerformance(parameters['symbol']));*/
  }

  /*private getMutualFundHistoryPerformance(symbol: string) {
    this.mutualFundHistory.getMutualFundHistory(symbol).subscribe(response => console.log(response) );
  }*/

}
