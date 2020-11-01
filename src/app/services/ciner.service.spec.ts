import { TestBed } from '@angular/core/testing';

import { CinerService } from './ciner.service';

describe('CinerService', () => {
  let service: CinerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
