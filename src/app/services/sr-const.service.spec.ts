import { TestBed, inject } from '@angular/core/testing';

import { SrConstService } from './sr-const.service';

describe('SrConstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrConstService]
    });
  });

  it('should be created', inject([SrConstService], (service: SrConstService) => {
    expect(service).toBeTruthy();
  }));
});
