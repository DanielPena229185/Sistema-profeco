import { TestBed } from '@angular/core/testing';

import { AuthInterseptorService } from './auth.interseptor.service';

describe('AuthInterseptorService', () => {
  let service: AuthInterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
