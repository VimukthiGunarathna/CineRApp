import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CinerService } from 'src/app/services/ciner.service';
import { BookingItemService } from 'src/app/shared/booking-item.service';

@Component({
  selector: 'app-book-movie',
  templateUrl: './book-movie.component.html',
  styleUrls: ['./book-movie.component.scss']
})
export class BookMovieComponent implements OnInit {

  public bookingItem
  colorSelect: Array<any>;
  sizeSelect: Array<any>

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
    this.colorSelect = [
      { value: 'Black', label: 'Black' },
      { value: 'White', label: 'White' },
      { value: 'Red', label: 'Red' },
    ];
    this.bookingItemService.bookingItem.subscribe(data => {
      this.bookingItem = data;
      //console.log(data);
      this.cinerService.getBookings(this.bookingItem.slot.slot_id).subscribe(data => {
        const obj = {
          'movie_desc': this.bookingItem.movie_desc,
          'movie_id': this.bookingItem.movie_id,
          'movie_name': this.bookingItem.movie_name,
          'availabe_seats': this.bookingItem.availabe_seats,
          'slot': this.bookingItem.slot,
          'booking': data
        }
        this.bookingItem = obj;
        console.log(this.bookingItem);

      });
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
