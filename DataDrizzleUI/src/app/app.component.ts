import { Component, OnInit, ChangeDetectorRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { MutualFundService } from './mutual-fund/mutual-fund.service';
import { IResponse } from './IResponse.';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-bootstrap-example';
  //@Input() mutualFundComp: MutualFundComponent;
  @ViewChild(MutualFundComponent) mutualFundComp: MutualFundComponent;

  mutualFundCompForm: FormGroup;
  companies: any;

  constructor(private mutualFundService: MutualFundService, private cd: ChangeDetectorRef, private fb: FormBuilder) { }

ngOnInit() {
  // this.mutualFundService.getMutualFundCompanies()
  // .subscribe(response => this.renderMutualFundCompanyChkBox(response));
}

renderMutualFundCompanyChkBox(response) {
  this.companies = response.data;
  const controls = this.companies.map(c => new FormControl(false));
  this.mutualFundCompForm = this.fb.group({
    companies: new FormArray(controls)
  });
  console.log(response);
}

compareMCompanies() {
  const companySymbols = this.mutualFundCompForm.value.companies
      .map((v, i) => v ? this.companies[i].symbol : null)
      .filter(v => v !== null);

      //this.mutualFundComp.prepareChart(companySymbols);
      this.mutualFundService.cartData.emit(companySymbols);
}

testMethod() {
  alert('callerd');
}
  
}
