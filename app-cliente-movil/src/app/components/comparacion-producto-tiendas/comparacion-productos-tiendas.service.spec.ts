import { TestBed } from '@angular/core/testing';

import { ComparacionProductosTiendasService } from './comparacion-productos-tiendas.service';

describe('ComparacionProductosTiendasService', () => {
  let service: ComparacionProductosTiendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparacionProductosTiendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
