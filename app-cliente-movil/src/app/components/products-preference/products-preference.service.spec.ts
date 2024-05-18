import { TestBed } from '@angular/core/testing';

import { ProductsPreferenceService } from './products-preference.service';

describe('ProductsPreferenceService', () => {
  let service: ProductsPreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsPreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
