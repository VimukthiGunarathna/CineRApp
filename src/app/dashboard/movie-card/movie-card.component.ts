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
  public timeSlots;
  public allMovies = [];
  public addTimeSlots = [];
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
      this.allMoviesTemp.forEach(element => {
        this.cinerService.getMovieTimeSlots(element.movie_id).subscribe(data => {
          this.timeSlots = data;
          const obj = {
            'movie_id': element.movie_id,
            'movie_name': element.movie_name,
            'movie_desc': element.movie_desc,
            'availabe_seats': element.available_seats,
            'movie_slots': data
          }
          this.allMovies.push(obj); // New movie array inclusive of timeslots
          console.log(this.allMovies);
        })
      });

    });
  }

  public bookMovieServiceUpdate(movie) {
    this.booking_item = movie;
    this.bookingItemService.updateBookingItem(movie);
  }

}
