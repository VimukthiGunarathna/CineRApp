"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieImagesService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var MovieImagesService = /** @class */ (function () {
    function MovieImagesService(http) {
        this.http = http;
        this.headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
        this.url = 'https://api.themoviedb.org/3/movie/popular/';
        this.url_top_movies = 'https://api.themoviedb.org/3/movie/top_rated/';
        this.url_top_shows = 'https://api.themoviedb.org/3/tv/top_rated/';
        this.config_url = 'https://api.themoviedb.org/3/configuration';
        this.apikey = 'c3f250deea0fe0862680a809246365e6';
        this.params = new http_1.HttpParams().set('api_key', this.apikey);
    }
    MovieImagesService.prototype.getConfig = function () {
        var params = new http_1.HttpParams().set('api_key', this.apikey);
        return this.http.get("" + this.config_url, { params: params });
    };
    /**
    * Get initial data collection from movie list
    */
    MovieImagesService.prototype.getMovieCover = function () {
        var params = new http_1.HttpParams().set('api_key', this.apikey);
        return this.http.get("" + this.url, { params: params });
    };
    MovieImagesService.prototype.getTrendingMovies = function () {
        var params = new http_1.HttpParams().set('api_key', this.apikey);
        return this.http.get("" + this.url_top_movies, { params: params });
    };
    MovieImagesService.prototype.getTrendingTvShows = function () {
        var params = new http_1.HttpParams().set('api_key', this.apikey);
        return this.http.get("" + this.url_top_shows, { params: params });
    };
    MovieImagesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MovieImagesService);
    return MovieImagesService;
}());
exports.MovieImagesService = MovieImagesService;
