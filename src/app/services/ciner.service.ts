import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CinerService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin':'*'
  });
  public url = 'http://localhost:8080';
  constructor( private http:HttpClient) { }


  /**
   * Get initial data collection from movie list
   */
  public getAllMovies() {
    return this.http.get(`${this.url}/getAllMovies`, { headers: this.headers });
  }

  /**
   * Get initial data collection
   * @param id : Movie id
   */
  public getMovieTimeSlots(id) {
    return this.http.get(`${this.url}/getTimeSlots/`+id, { headers: this.headers });
  }

  /**
   * Add item to the local storage
   * @param item : Target item
   */
  addMovie(item) {
    const newMovie = item;
    console.log('IAM ',newMovie);   
    return this.http.post(`${this.url}/addMovie`, newMovie, {headers: this.headers});
  }

  /**
  * Add item to the local storage
  * @param item : Target item
  */
  deleteItem(itemId) {
    const movieId = itemId;
    console.log('IAM ',movieId);   
    return this.http.put(`${this.url}/updateMovie`, movieId, {headers: this.headers});
  }

  /**
  * Add item to the local storage
  * @param item : Target item
  */
  updateItem(item) {
    const updateMovie = item;
    console.log('IAM ',updateMovie);   
    return this.http.put(`${this.url}/updateMovie`, updateMovie, {headers: this.headers});
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
