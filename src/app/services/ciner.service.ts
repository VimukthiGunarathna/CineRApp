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
  addMovie(movie) {
    console.log('IAM ', movie);
    return this.http.post(`${this.url}/addMovie`, movie, { headers: this.headers });
  }

  /**
  * Delete movie from database
  * @param movieId : movie id of the selected movie
  */
  deleteMovie(movieId) {
    console.log('IAM ', movieId);
    return this.http.delete(`${this.url}/deleteMovie/` + movieId, { headers: this.headers });
  }

  /**
  * Update the selected movie in database
  * @param updatedMovie : updated movie item
  */
  updateMovie(updatedMovie, updatedMovieId) {
    return this.http.put(`${this.url}/updateMovie/{updatedMovieId}`, updatedMovie, { headers: this.headers });
  }

  /**
   *  Replace the collections in the  local storage
   * @param todo : updated todo Collection
   * @param deleted : updated deleted Collection
   * @param progress :updated in progress Collection
   * @param done :updated done Collection
   */
  // replaceCollection(todo, deleted, progress, done) {
  //   this.storage.replaceStorageCollections(todo, deleted, progress, done);
  // }
  /**
  * String validation for title property
  * @param userControl : user input dom values
  */
  // isTitleValid(userControl: AbstractControl) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       if (this.validateTitle(userControl.value)) {
  //         resolve({ titleNotAvailable: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1000);
  //   });
  // }

  /**
  * Search  title string in the collection 
  * @param title : inserted title string 
  */
  // validateTitle(title: string) {
  //   console.log(this.storage.validateTitle(title));
  //   return (this.storage.validateTitle(title) > -1);
  // }
}
