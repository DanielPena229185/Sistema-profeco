import { TestBed } from '@angular/core/testing';

import { CompararService } from './comparar.service';

describe('CompararService', () => {
  let service: CompararService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompararService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
