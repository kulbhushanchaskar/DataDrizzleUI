import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualFundHistoryComponent } from './mutual-fund-history.component';

describe('MutualFundHistoryComponent', () => {
  let component: MutualFundHistoryComponent;
  let fixture: ComponentFixture<MutualFundHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualFundHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualFundHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
