"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./public/dashboard/dashboard.component");
var admin_component_1 = require("./public/admin/admin.component");
var add_movie_component_1 = require("./public/admin/add-movie/add-movie.component");
var movie_card_component_1 = require("./public/dashboard/movie-card/movie-card.component");
var book_movie_component_1 = require("./public/dashboard/movie-card/book-movie/book-movie.component");
// Dependencies 
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var snack_bar_1 = require("@angular/material/snack-bar");
var top_nav_component_1 = require("./shared/top-nav/top-nav.component");
var badge_1 = require("@angular/material/badge");
var icon_1 = require("@angular/material/icon");
var cover_box_component_1 = require("./public/dashboard/cover-box/cover-box.component");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
var angular_bootstrap_md_2 = require("angular-bootstrap-md");
var AppModule = /** @class */ (function () {
    function AppModule(library) {
        this.library = library;
        library.addIcons(free_solid_svg_icons_1.faSquare, free_solid_svg_icons_1.faCheckSquare, free_solid_svg_icons_1.faCog, free_solid_svg_icons_1.faPlus, free_solid_svg_icons_1.faPlusSquare, free_solid_svg_icons_1.faEllipsisV, free_solid_svg_icons_1.faTrash, free_solid_svg_icons_1.faAngleDown, free_solid_svg_icons_1.faChevronDown);
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                admin_component_1.AdminComponent,
                add_movie_component_1.AddMovieComponent,
                movie_card_component_1.MovieCardComponent,
                book_movie_component_1.BookMovieComponent,
                top_nav_component_1.TopNavComponent,
                cover_box_component_1.CoverBoxComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                angular_fontawesome_1.FontAwesomeModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                snack_bar_1.MatSnackBarModule,
                badge_1.MatBadgeModule,
                icon_1.MatIconModule,
                angular_bootstrap_md_1.CarouselModule,
                angular_bootstrap_md_1.WavesModule,
                angular_bootstrap_md_2.MDBBootstrapModule.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
