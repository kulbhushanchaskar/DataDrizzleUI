import { Component, OnInit } from '@angular/core';
import { Connection } from './connection';
import { ConnectionService } from './connection.service';
import { IResponse } from '../i.response';
import { SharedService } from './../shared.service';
import { FormGroup, FormControl } from '@angular/forms';

declare const Plotly

@Component({
  selector: 'app-create-connection',
  templateUrl: './create-connection.component.html',
  styleUrls: ['./create-connection.component.css']
})
export class CreateConnectionComponent implements OnInit {
  response: IResponse<string[]>;
  istestConnectionSuccessful: boolean = false;
  tables: string[] = [];
  formdata: FormGroup;
  //connection: NgForm;
  constructor(private connectionService: ConnectionService, private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.broadCastCurrentCoponent("create-connection");

    //this.connection.get('country').setValue(this.CountryResponse);

    this.formdata = new FormGroup({
      connectionName: new FormControl("aaaa"),
      databaseName: new FormControl("world"),
      username: new FormControl("root"),
      pwd: new FormControl("root"),
      host: new FormControl("localhost"),
      port: new FormControl("3306"),
   });
  }

  createConnetion(connection) {
    this.connectionService.createConnection(connection)
    .subscribe(response => this.printData(response));
 }

 testConnection(connection) {
  this.connectionService.testConnection(connection)
  .subscribe(response =>  this.populateTable(response));
 }

 populateTable(response: IResponse<string[]>) {
  if(response.notifications.errors.length > 0) {
    this.istestConnectionSuccessful = false;
    console.error(response.notifications.errors);
  } else {
    this.istestConnectionSuccessful = true;
    this.tables = response.data;
  }
 }

  printData(response: IResponse<string[]>) {
    console.log(response);
    if(response.notifications.errors.length > 0) {
      console.error(response.notifications.errors);
    } 
    if(response.notifications.success.length > 0) {
      console.log(response.notifications.success);
      this.istestConnectionSuccessful = true;
    }
    if(response.notifications.warnings.length > 0) {
      console.log(response.notifications.warnings);
    }
    //response.notifi

  }

}