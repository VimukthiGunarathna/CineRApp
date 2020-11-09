import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingItemService {

  // Observable sources
  private bookingItemSource = new ReplaySubject<any>();


  // Observable streams
  bookingItem = this.bookingItemSource.asObservable();


  constructor() { }

  public updateBookingItem(items) {
    this.bookingItemSource.next(items);
  }
}
