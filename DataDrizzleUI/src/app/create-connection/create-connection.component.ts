import { Component, OnInit } from '@angular/core';
import { Connection } from './connection';
import { ConnectionService } from './connection.service';
import { IResponse } from '../IResponse.';

declare const Plotly

@Component({
  selector: 'app-create-connection',
  templateUrl: './create-connection.component.html',
  styleUrls: ['./create-connection.component.css']
})
export class CreateConnectionComponent implements OnInit {
  response: IResponse;
  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
  }

  createConnetion(connection) {
    this.connectionService.createConnection(connection)
    .subscribe(response => this.printData(response));
 }

  printData(response: IResponse) {
    console.log(response.data);
    let traces = new Array();
    let layout = {barmode: 'group'};
    
    Plotly.newPlot('myDiv', response.data, layout);

  }

}