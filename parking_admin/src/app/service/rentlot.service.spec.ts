import { TestBed, inject } from '@angular/core/testing';

import { RentLotService } from './rentlot.service';

describe('RentLotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentLotService]
    });
  });

  it('should be created', inject([RentLotService], (service: RentLotService) => {
    expect(service).toBeTruthy();
  }));
});
