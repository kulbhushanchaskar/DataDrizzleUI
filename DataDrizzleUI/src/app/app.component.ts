import { Component, OnInit, ChangeDetectorRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';
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
  //@ViewChild(MutualFundComponent) mutualFundComp: MutualFundComponent;

  mutualFundCompForm: FormGroup;
  companies: any;
  form: FormGroup;
  mainPageSideBarOpend: boolean;

  constructor(private mutualFundService: MutualFundService, private cd: ChangeDetectorRef, private fb: FormBuilder) { }

  ngOnInit() {
    this.mutualFundService.getMutualFundCompanies()
      .subscribe(response => this.renderMutualFundCompanyChkBox(response));
  }

  renderMutualFundCompanyChkBox(response) {
    this.companies = response.data;
    let checkboxGroup = new FormArray(this.companies.map(item => new FormGroup({
      //id: new FormControl(item.key),
      text: new FormControl(item.companyName),
      symbol: new FormControl(item.symbol),
      checkbox: new FormControl(false)
    })));

    // create a hidden reuired formControl to keep status of checkbox group
    let hiddenControl = new FormControl(this.mapItems(checkboxGroup.value), Validators.required);
    // update checkbox group's value to hidden formcontrol
    checkboxGroup.valueChanges.subscribe((v) => {
      console.log(v);
      hiddenControl.setValue(this.mapItems(v));
    });

    this.form = new FormGroup({
      items: checkboxGroup,
      selectedItems: hiddenControl
    });

    this.mainPageSideBarOpend = true;
  }

  compareMCompanies() {
    const companySymbols = this.form.value.items.filter((item) => item.checkbox).map(item => item.symbol);

    //this.mutualFundComp.prepareChart(companySymbols);
    this.mutualFundService.cartData.emit(companySymbols);
  }

  testMethod() {
    alert('callerd');
  }

  mapItems(items) {
    let selectedItems = items.filter((item) => item.checkbox).map((item) => item.symbol);
    return selectedItems.length ? selectedItems : null;
  }

}
