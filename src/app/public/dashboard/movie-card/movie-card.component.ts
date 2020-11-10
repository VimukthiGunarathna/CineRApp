import { Component, OnInit } from '@angular/core';
import { CinerService } from 'src/app/services/ciner.service';
import { MovieImagesService } from 'src/app/services/movie-images.service';
import { BookingItemService } from 'src/app/shared/booking-item.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  public cover_photos = [];
  public base_url;
  public movie_images_temp;
  public movie_image;
  public slides: any = [[]];

  public allMoviesTemp;
  public timeSlotsTemp;


  public bookings;

  public allMovies = [];
  public timeSlots = [];

  public booking_item;


  constructor(
    private cinerService: CinerService,
    private bookingItemService: BookingItemService,
    private coverlistService: MovieImagesService
  ) { }

  ngOnInit(): void {
    //Get configurations 
    this.coverlistService.getConfig().subscribe(data => {
      this.base_url = data.images.base_url + 'original';
      console.log(this.base_url);
      // Get all tv posters to the temp array 
      this.coverlistService.getTrendingMovies().subscribe(data => {
        console.log(data.results);
        this.movie_images_temp = data.results;
        this.movie_images_temp.forEach(element => {
          this.cover_photos.push(this.base_url + element.poster_path);
        });
        this.movie_image = this.cover_photos.slice(0, 1)
        // this.cover_photos = this.cover_photos.slice(1, 4);
        console.log(this.cover_photos);
        this.slides = this.chunk(this.cover_photos, 4);
      });
    });

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

  public chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

}
