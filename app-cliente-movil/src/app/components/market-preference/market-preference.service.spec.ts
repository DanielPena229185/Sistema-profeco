import { TestBed } from '@angular/core/testing';

import { MarketPreferenceService } from './market-preference.service';

describe('MarketPreferenceService', () => {
  let service: MarketPreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketPreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
