import { TestBed } from '@angular/core/testing';

import { MarketReviewService } from './market-review.service';

describe('MarketReviewService', () => {
  let service: MarketReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
