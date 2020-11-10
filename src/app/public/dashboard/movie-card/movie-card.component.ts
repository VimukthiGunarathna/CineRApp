import { Component, OnInit } from '@angular/core';
import { CinerService } from 'src/app/services/ciner.service';
import { BookingItemService } from 'src/app/shared/booking-item.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  public allMoviesTemp;
  public timeSlotsTemp;


  public bookings;

  public allMovies = [];
  // public addTimeSlots = [];
  public timeSlots = [];

  public booking_item;


  constructor(
    private cinerService: CinerService,
    private bookingItemService: BookingItemService
  ) { }

  ngOnInit(): void {
    // Get all movies to the temp array 
    this.cinerService.getAllMovies().subscribe(data => {
      this.allMoviesTemp = data;
      // Get time slots for each movie
      this.allMoviesTemp.forEach(x => {
        this.cinerService.getMovieTimeSlots(x.movie_id).subscribe(data => {
          this.timeSlotsTemp = data;
          const obj = {
            'movie_id': x.movie_id,
            'movie_name': x.movie_name,
            'movie_desc': x.movie_desc,
            'availabe_seats': x.available_seats,
            'movie_slots': data
          }
          this.allMovies.push(obj); // New movie array inclusive of timeslots
        })
      });
    });
  }

  public bookMovieServiceUpdate(movie, slot) {
    const item = {
      'movie_id': movie.movie_id,
      'movie_name': movie.movie_name,
      'movie_desc': movie.movie_desc,
      'availabe_seats': movie.available_seats,
      'slot': slot
    }
    console.log(item);
    this.booking_item = item;
    this.bookingItemService.updateBookingItem(item);
  }

}
