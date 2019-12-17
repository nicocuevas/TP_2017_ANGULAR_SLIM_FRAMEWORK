import { TestBed, inject } from '@angular/core/testing';

import { RentStatusService } from './rent-status.service';

describe('RentStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentStatusService]
    });
  });

  it('should be created', inject([RentStatusService], (service: RentStatusService) => {
    expect(service).toBeTruthy();
  }));
});
