import { TestBed } from '@angular/core/testing';

import { MarketReportFormService } from './market-report-form.service';

describe('MarketReportFormService', () => {
  let service: MarketReportFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketReportFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
