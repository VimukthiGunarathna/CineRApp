"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoverBoxComponent = void 0;
var core_1 = require("@angular/core");
var CoverBoxComponent = /** @class */ (function () {
    function CoverBoxComponent(coverlistService) {
        this.coverlistService = coverlistService;
        this.cover_photos = [];
    }
    CoverBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get configurations 
        this.coverlistService.getConfig().subscribe(function (data) {
            _this.base_url = data.images.base_url + 'original';
            console.log(_this.base_url);
            // Get all tv posters to the temp array 
            _this.coverlistService.getMovieCover().subscribe(function (data) {
                console.log(data.results);
                _this.cover_images_temp = data.results;
                _this.cover_images_temp.forEach(function (element) {
                    _this.cover_photos.push(_this.base_url + element.backdrop_path);
                });
                _this.cover_image = _this.cover_photos.slice(0, 1);
                _this.cover_photos = _this.cover_photos.slice(1, 7);
            });
        });
    };
    CoverBoxComponent = __decorate([
        core_1.Component({
            selector: 'app-cover-box',
            templateUrl: './cover-box.component.html',
            styleUrls: ['./cover-box.component.scss']
        })
    ], CoverBoxComponent);
    return CoverBoxComponent;
}());
exports.CoverBoxComponent = CoverBoxComponent;
