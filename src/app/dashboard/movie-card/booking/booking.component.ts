import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CinerService } from 'src/app/services/ciner.service';
import { BookingItemService } from 'src/app/shared/booking-item.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  public bookingItem

  // Forms
  public booking_form;

  constructor(
    private cinerService: CinerService,
    private bookingItemService: BookingItemService,
    private bookingForm: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookingItemService.bookingItem.subscribe(data => {
      this.bookingItem = data;
    });

    this.booking_form = this.bookingForm.group({
      tickets: ['', [Validators.required,]],
    });
  }
  public bookMovie() {
    if (this.booking_form.valid) {
      let temp = this.booking_form.getRawValue();
      let bookingItem = {
        movie_id: this.bookingItem.movie_id,
        slot_id: this.bookingItem.slot.slot_id,
        customer_id: 1,
        tickets: temp.tickets,
      }
      console.log(bookingItem);

      this.cinerService.bookMovie(bookingItem).subscribe(res => {
        console.log(res);
      });
    }
  }

}
