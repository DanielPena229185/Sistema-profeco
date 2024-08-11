import { TestBed } from '@angular/core/testing';

import { AuthInformationService } from './auth-information.service';

describe('AuthInformationService', () => {
  let service: AuthInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
