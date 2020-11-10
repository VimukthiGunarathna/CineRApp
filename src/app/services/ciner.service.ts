import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CinerService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  public url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }


  /**
   * Get initial data collection from movie list
   */
  public getAllMovies() {
    return this.http.get(`${this.url}/getAllMovies`, { headers: this.headers });
  }

  /**
   * Get time slots for a particular movie
   * @param id : Movie id
   */
  public getMovieTimeSlots(id) {
    return this.http.get(`${this.url}/getTimeSlots/` + id, { headers: this.headers });
  }

  /**
   * Add movie to database
   * @param movie : movie object
   */
  public addMovie(movie) {
    console.log(movie);
    
    console.log('IAM ', movie);
    return this.http.post(`${this.url}/addMovie`, movie, { headers: this.headers });
  }

  /**
  * Delete movie from database
  * @param movieId : movie id of the selected movie
  */
  public deleteMovie(movieId) {
    console.log('IAM ', movieId);
    return this.http.delete(`${this.url}/deleteMovie/` + movieId, { headers: this.headers });
  }

  /**
  * Update the selected movie in database
  * @param updatedMovie : updated movie item
  */
  public updateMovie(updatedMovie, updatedMovieId) {
    return this.http.put(`${this.url}/updateMovie/{updatedMovieId}`, updatedMovie, { headers: this.headers });
  }

  public bookMovie(bookingItem) {
    return this.http.post(`${this.url}/bookMovie/`, bookingItem, { headers: this.headers });
  }

  public getBookings(slotId) {
    return this.http.get(`${this.url}/getNumberOfBookings/` + slotId, { headers: this.headers });
  }

}
