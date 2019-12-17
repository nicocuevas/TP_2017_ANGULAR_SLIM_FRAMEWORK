import { TestBed, inject } from '@angular/core/testing';

import { SectionTypeService } from './section-type.service';

describe('SectionTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectionTypeService]
    });
  });

  it('should be created', inject([SectionTypeService], (service: SectionTypeService) => {
    expect(service).toBeTruthy();
  }));
});
