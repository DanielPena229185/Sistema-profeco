import { TestBed } from '@angular/core/testing';

import { ReportMarketFormService } from './report-market-form.service';

describe('ReportMarketFormService', () => {
  let service: ReportMarketFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportMarketFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
