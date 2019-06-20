import { Component, OnInit, ChangeDetectorRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { MutualFundService } from './mutual-fund/mutual-fund.service';
import { SharedService } from './shared.service';

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
  mutualFundCompanies: any;
  form: FormGroup;
  mainPageSideBarOpend: boolean;

  constructor(private mutualFundService: MutualFundService, private cd: ChangeDetectorRef, private fb: FormBuilder, private sharedService: SharedService) { 

    this.mutualFundService.getMutualFundCompaniesLstEvent().subscribe(companyList => {
      this.renderMutualFundCompanyChkBox(companyList);
    });

    this.sharedService.getCurrentComponentNotifier().subscribe(componentName => this.resetSideBarValues(componentName));

  }

  ngOnInit() {
    
  }

  resetSideBarValues(componentName: string) {
    switch(componentName) {
      case "mutual-fund":
      break;
      case "create-connection":
        this.mutualFundCompanies = null;
      break;
      case "stock-and-index-price":
        this.mutualFundCompanies = null;
      break;
    }
  }

  renderMutualFundCompanyChkBox(companyList) {
    this.mutualFundCompanies = companyList;
    let checkboxGroup = new FormArray(this.mutualFundCompanies.map(item => new FormGroup({
      text: new FormControl(item.companyName),
      symbol: new FormControl(item.symbol),
      checkbox: new FormControl(false)
    })));

    // create a hidden reuired formControl to keep status of checkbox group
    let hiddenControl = new FormControl(this.mapItems(checkboxGroup.value), Validators.required);
    // update checkbox group's value to hidden formcontrol
    checkboxGroup.valueChanges.subscribe((v) => {
      //console.log(v);
      console.log(this.mapItems(v));
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
