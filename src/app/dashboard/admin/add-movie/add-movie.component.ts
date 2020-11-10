import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CinerService } from 'src/app/services/ciner.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  @Output() newMovieEvent = new EventEmitter<object>();

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  public addMovieForm;
  public addTimeSlotForm;
  public timeSlots = [];
  public movieItem;
  public isMax = false;
  constructor(
    private movieForm: FormBuilder,
    private cinerService: CinerService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.addMovieForm = this.movieForm.group({
      movie_name: ['', [Validators.required,]],
      movie_desc: ['', [Validators.required,]],
      available_seats: ['', [Validators.required,]],
    });
    this.addTimeSlotForm = this.movieForm.group({
      time_slots: ['', [Validators.required]],
    });
  }

  /**
   * Initialize new movie obj
   */
  public onSubmit() {
    let temp = this.addMovieForm.getRawValue();
    if (temp.available_seats > 10) {
      this.isMax = true;
    } else {
      this.isMax = false;
      this.movieItem = {
        movie_name: temp.movie_name,
        movie_desc: temp.movie_desc,
        available_seats: temp.available_seats,
        time_slots: this.timeSlots
      }
      this.addMovie(this.movieItem);
    }

  }

  /**
   * Pass the movie obj to backend
   * @param movie : newly created movie obj
   */
  private addMovie(movie) {
    this.newMovieEvent.emit(movie);
    this.cinerService.addMovie(movie).subscribe(data => {
      this.pushAlert(movie);
    });
  }

  /**
   * Add movie timeslots to timeslot array
   */
  public addTimeSlot() {
    let temp = this.addTimeSlotForm.getRawValue();
    this.timeSlots.push(temp.time_slots);
    console.log(this.timeSlots);
  }

  /**
   * Show notifications to user 
   * @param movie : new movie item inserted by user
   */
  public pushAlert(movie) {
    this._snackBar.open('Movie :' + movie.movie_name + 'was sucessfully added', 'Close', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
