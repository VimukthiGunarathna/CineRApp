"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookMovieComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var BookMovieComponent = /** @class */ (function () {
    function BookMovieComponent(cinerService, bookingItemService, bookingForm, http, router) {
        this.cinerService = cinerService;
        this.bookingItemService = bookingItemService;
        this.bookingForm = bookingForm;
        this.http = http;
        this.router = router;
    }
    BookMovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorSelect = [
            { value: 'Black', label: 'Black' },
            { value: 'White', label: 'White' },
            { value: 'Red', label: 'Red' },
        ];
        this.bookingItemService.bookingItem.subscribe(function (data) {
            _this.bookingItem = data;
            //console.log(data);
            _this.cinerService.getBookings(_this.bookingItem.slot.slot_id).subscribe(function (data) {
                var obj = {
                    'movie_desc': _this.bookingItem.movie_desc,
                    'movie_id': _this.bookingItem.movie_id,
                    'movie_name': _this.bookingItem.movie_name,
                    'availabe_seats': _this.bookingItem.availabe_seats,
                    'slot': _this.bookingItem.slot,
                    'booking': data
                };
                _this.bookingItem = obj;
                console.log(_this.bookingItem);
            });
        });
        this.booking_form = this.bookingForm.group({
            tickets: ['', [forms_1.Validators.required,]]
        });
    };
    BookMovieComponent.prototype.bookMovie = function () {
        if (this.booking_form.valid) {
            var temp = this.booking_form.getRawValue();
            var bookingItem = {
                movie_id: this.bookingItem.movie_id,
                slot_id: this.bookingItem.slot.slot_id,
                customer_id: 1,
                tickets: temp.tickets
            };
            console.log(bookingItem);
            this.cinerService.bookMovie(bookingItem).subscribe(function (res) {
                console.log(res);
            });
        }
    };
    BookMovieComponent = __decorate([
        core_1.Component({
            selector: 'app-book-movie',
            templateUrl: './book-movie.component.html',
            styleUrls: ['./book-movie.component.scss']
        })
    ], BookMovieComponent);
    return BookMovieComponent;
}());
exports.BookMovieComponent = BookMovieComponent;
