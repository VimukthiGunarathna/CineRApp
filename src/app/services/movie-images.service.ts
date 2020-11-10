import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieImagesService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  public url = 'https://api.themoviedb.org/3/movie/popular/';
  public url_top_movies = 'https://api.themoviedb.org/3/movie/top_rated/';
  public url_top_shows = 'https://api.themoviedb.org/3/tv/top_rated/';
  public config_url = 'https://api.themoviedb.org/3/configuration';
  public apikey = 'c3f250deea0fe0862680a809246365e6';
  public params = new HttpParams().set('api_key', this.apikey);

  constructor(private http: HttpClient) { }

  public getConfig(): Observable<any> {
    const params = new HttpParams().set('api_key', this.apikey);
    return this.http.get(`${this.config_url}`, { params });
  }
  /**
  * Get initial data collection from movie list
  */
  public getMovieCover(): Observable<any> {
    const params = new HttpParams().set('api_key', this.apikey);
    return this.http.get(`${this.url}`, { params });
  }

  public getTrendingMovies(): Observable<any> {
    const params = new HttpParams().set('api_key', this.apikey);
    return this.http.get(`${this.url_top_movies}`, { params });
  }
  public getTrendingTvShows(): Observable<any> {
    const params = new HttpParams().set('api_key', this.apikey);
    return this.http.get(`${this.url_top_shows}`, { params });
  }
}
