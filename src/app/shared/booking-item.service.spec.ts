import { TestBed } from '@angular/core/testing';

import { BookingItemService } from './booking-item.service';

describe('BookingItemService', () => {
  let service: BookingItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
