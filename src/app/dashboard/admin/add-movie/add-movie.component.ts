import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CinerService } from 'src/app/services/ciner.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  public addMovieForm;
  public addTimeSlotForm;
  public timeSlots = [];
  public movieItem;
  constructor(
    private movieForm: FormBuilder,
    private cinerService: CinerService,
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
    if (this.addMovieForm.valid) {
      let temp = this.addMovieForm.getRawValue();
      this.movieItem = {
        movie_name: temp.movie_name,
        movie_desc: temp.movie_desc,
        available_seats: temp.available_seats,
        time_slots:this.timeSlots
      }
      this.addMovie(this.movieItem);
    }
  }

  /**
   * Pass the movie obj to backend
   * @param movie : newly created movie obj
   */
  private addMovie(movie){
    this.cinerService.addMovie(movie).subscribe(data =>{
      console.log('see');
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
}
