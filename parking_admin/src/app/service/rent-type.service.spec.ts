import { TestBed, inject } from '@angular/core/testing';

import { RentTypeService } from './rent-type.service';

describe('RentTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentTypeService]
    });
  });

  it('should be created', inject([RentTypeService], (service: RentTypeService) => {
    expect(service).toBeTruthy();
  }));
});
