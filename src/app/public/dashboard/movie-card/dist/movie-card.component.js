"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieCardComponent = void 0;
var core_1 = require("@angular/core");
var MovieCardComponent = /** @class */ (function () {
    function MovieCardComponent(cinerService, bookingItemService, coverlistService) {
        this.cinerService = cinerService;
        this.bookingItemService = bookingItemService;
        this.coverlistService = coverlistService;
        this.cover_photos = [];
        this.slides = [[]];
        this.allMovies = [];
        this.timeSlots = [];
    }
    MovieCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get configurations 
        this.coverlistService.getConfig().subscribe(function (data) {
            _this.base_url = data.images.base_url + 'original';
            console.log(_this.base_url);
            // Get all tv posters to the temp array 
            _this.coverlistService.getTrendingMovies().subscribe(function (data) {
                console.log(data.results);
                _this.movie_images_temp = data.results;
                _this.movie_images_temp.forEach(function (element) {
                    _this.cover_photos.push(_this.base_url + element.poster_path);
                });
                _this.movie_image = _this.cover_photos.slice(0, 1);
                // this.cover_photos = this.cover_photos.slice(1, 4);
                console.log(_this.cover_photos);
                _this.slides = _this.chunk(_this.cover_photos, 4);
            });
        });
        // Get all movies to the temp array 
        this.cinerService.getAllMovies().subscribe(function (data) {
            _this.allMoviesTemp = data;
            // Get time slots for each movie
            _this.allMoviesTemp.forEach(function (x) {
                _this.cinerService.getMovieTimeSlots(x.movie_id).subscribe(function (data) {
                    _this.timeSlotsTemp = data;
                    var obj = {
                        'movie_id': x.movie_id,
                        'movie_name': x.movie_name,
                        'movie_desc': x.movie_desc,
                        'availabe_seats': x.available_seats,
                        'movie_slots': data
                    };
                    _this.allMovies.push(obj); // New movie array inclusive of timeslots
                });
            });
        });
    };
    MovieCardComponent.prototype.bookMovieServiceUpdate = function (movie, slot) {
        var item = {
            'movie_id': movie.movie_id,
            'movie_name': movie.movie_name,
            'movie_desc': movie.movie_desc,
            'availabe_seats': movie.available_seats,
            'slot': slot
        };
        console.log(item);
        this.booking_item = item;
        this.bookingItemService.updateBookingItem(item);
    };
    MovieCardComponent.prototype.chunk = function (arr, chunkSize) {
        var R = [];
        for (var i = 0; i < arr.length; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    };
    MovieCardComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-card',
            templateUrl: './movie-card.component.html',
            styleUrls: ['./movie-card.component.scss']
        })
    ], MovieCardComponent);
    return MovieCardComponent;
}());
exports.MovieCardComponent = MovieCardComponent;
