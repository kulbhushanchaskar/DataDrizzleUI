import { TestBed, inject } from '@angular/core/testing';

import { MutualFundHistoryService } from './mutual-fund-history.service';

describe('MutualFundHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MutualFundHistoryService]
    });
  });

  it('should be created', inject([MutualFundHistoryService], (service: MutualFundHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
