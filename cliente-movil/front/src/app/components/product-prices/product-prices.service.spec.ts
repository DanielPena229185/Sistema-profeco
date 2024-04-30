import { TestBed } from '@angular/core/testing';

import { ProductPricesService } from './product-prices.service';

describe('ProductPricesService', () => {
  let service: ProductPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
