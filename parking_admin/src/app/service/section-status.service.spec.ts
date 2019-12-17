import { TestBed, inject } from '@angular/core/testing';

import { SectionStatusService } from './section-status.service';

describe('SectionStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectionStatusService]
    });
  });

  it('should be created', inject([SectionStatusService], (service: SectionStatusService) => {
    expect(service).toBeTruthy();
  }));
});
