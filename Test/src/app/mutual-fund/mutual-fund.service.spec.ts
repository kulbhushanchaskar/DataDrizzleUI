import { TestBed, inject } from '@angular/core/testing';

import { MutualFundService } from './mutual-fund.service';

describe('MutualFundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MutualFundService]
    });
  });

  it('should be created', inject([MutualFundService], (service: MutualFundService) => {
    expect(service).toBeTruthy();
  }));
});
