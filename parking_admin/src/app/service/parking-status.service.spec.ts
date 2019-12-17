import { TestBed, inject } from '@angular/core/testing';

import { ParkingStatusService } from './parking-status.service';

describe('ParkingStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingStatusService]
    });
  });

  it('should be created', inject([ParkingStatusService], (service: ParkingStatusService) => {
    expect(service).toBeTruthy();
  }));
});
