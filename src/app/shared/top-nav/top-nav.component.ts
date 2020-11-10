import { Component, OnInit } from '@angular/core';
import { BookingItemService } from '../booking-item.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  public notifications; // notification counter
  constructor(
    private bookingItem: BookingItemService
  ) { }

  ngOnInit(): void {
    this.bookingItem.bookingItem.subscribe(data => {
      this.notifications = data.length;
    });
  }

}
