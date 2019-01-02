import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAndIndexPriceComponent } from './stock-and-index-price.component';

describe('StockAndIndexPriceComponent', () => {
  let component: StockAndIndexPriceComponent;
  let fixture: ComponentFixture<StockAndIndexPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockAndIndexPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAndIndexPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
