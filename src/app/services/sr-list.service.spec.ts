import { TestBed, inject } from '@angular/core/testing';

import { SrListService } from './sr-list.service';

describe('SrListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrListService]
    });
  });

  it('should be created', inject([SrListService], (service: SrListService) => {
    expect(service).toBeTruthy();
  }));
});
