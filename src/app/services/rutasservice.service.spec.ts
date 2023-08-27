import { TestBed } from '@angular/core/testing';

import { RutasserviceService } from './rutasservice.service';

describe('RutasserviceService', () => {
  let service: RutasserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutasserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
