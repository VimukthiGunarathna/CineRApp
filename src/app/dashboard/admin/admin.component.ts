import { Component, OnInit } from '@angular/core';
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
  constructor(
    private cinerService: CinerService
  ) { }

  ngOnInit(): void {
    this.cinerService.getAllMovies().subscribe(data => {
      this.allMoviesTemp = data;
      console.log(this.allMoviesTemp);
      this.allMoviesTemp.forEach(element => {
        this.cinerService.getMovieTimeSlots(element.movie_id).subscribe(data => {
          this.timeSlots = data;
          const obj = {
            'movie_id':element.movie_id,
            'movie_name':element.movie_name,
            'movie_desc':element.movie_desc,
            'movie_slots':data
          }
          this.allMovies.push(obj);
          console.log(this.allMovies);
        })
      });
      
    });
  }

}
