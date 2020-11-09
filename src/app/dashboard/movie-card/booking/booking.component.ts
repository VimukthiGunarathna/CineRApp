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

  public allMoviesTemp;
  public timeSlots;
  public allMovies = [];
  public addTimeSlots = [];

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
      console.log(data);
      
    });

    this.booking_form = this.bookingForm.group({
      movie_name: ['', [Validators.required,]],
      movie_desc: ['', [Validators.required,]],
      availabe_seats: ['', [Validators.required,]],
      time_slots: ['', [Validators.required,]],
    });
  }

}
