import { TestBed, inject } from '@angular/core/testing';

import { UserAuditService } from './user-audit.service';

describe('UserAuditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuditService]
    });
  });

  it('should be created', inject([UserAuditService], (service: UserAuditService) => {
    expect(service).toBeTruthy();
  }));
});
