import { TestBed, inject } from '@angular/core/testing';

import { ParkingTypeService } from './parking-type.service';

describe('ParkingTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingTypeService]
    });
  });

  it('should be created', inject([ParkingTypeService], (service: ParkingTypeService) => {
    expect(service).toBeTruthy();
  }));
});
