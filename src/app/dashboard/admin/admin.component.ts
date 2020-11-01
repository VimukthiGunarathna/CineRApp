import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CinerService } from 'src/app/services/ciner.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public allMoviesTemp;
  public timeSlots;
  public allMovies = [];
  public addTimeSlots = [];

  // Forms
  public updateMovieForm;
  public addTimeSlotForm;

  public selectedMovie;
  public updateMovieItem;
  constructor(
    private cinerService: CinerService,
    private movieForm: FormBuilder,
    private http: HttpClient,
    private router: Router
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
        })
      });

    });

    this.updateMovieForm = this.movieForm.group({
      movie_name: ['', [Validators.required,]],
      movie_desc: ['', [Validators.required,]],
      availabe_seats: ['', [Validators.required,]],
      time_slots: ['', [Validators.required,]],

    });

    this.addTimeSlotForm = this.movieForm.group({
      time_slots: ['', [Validators.required]],
    });
  }

  /**
   * Delete selected movie
   * @param movie : movie object 
   */
  public deleteMovie(movie) {
    let id = movie.movie_id;
    let index = this.allMovies.indexOf(id);
    if (index !== -1) {
      this.allMovies.splice(index, 1);
    }
    this.cinerService.deleteMovie(id).subscribe(data => {
      console.log("deleted");
    });
  }

  /**
* Update selected movie item
* @param item : Selected item 
*/
  public updateMovie() {
    let temp = this.updateMovieForm.getRawValue();
    this.updateMovieItem = {
      movie_name: temp.movie_name,
      movie_desc: temp.movie_desc,
      availabe_seats: temp.availabe_seats,
      time_slots: this.addTimeSlots
    }
    console.log(this.updateMovieItem);
    let movieId = temp.movie_id;
    this.cinerService.updateMovie(this.updateMovieItem,movieId).subscribe(data => {
      console.log('see');
    });
  }

  /**
   * Add movie timeslots to timeslot array
   */
  public addTimeSlot() {
    let temp = this.addTimeSlotForm.getRawValue();
    this.addTimeSlots.push(temp.time_slots);
    console.log(this.timeSlots);
  }

  /**
 * Currently selected item
 * @param item : Selected item 
 */
  public selectedItem(item) {
    console.log(item);
    this.selectedMovie = item;
  }
}
