import { TestBed, inject } from '@angular/core/testing';

import { StockAndIndexPriceService } from './stock-and-index-price.service';

describe('StockAndIndexPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockAndIndexPriceService]
    });
  });

  it('should be created', inject([StockAndIndexPriceService], (service: StockAndIndexPriceService) => {
    expect(service).toBeTruthy();
  }));
});
