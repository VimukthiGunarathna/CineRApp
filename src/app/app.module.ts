import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { AdminComponent } from './public/admin/admin.component';
import { AddMovieComponent } from './public/admin/add-movie/add-movie.component';
import { MovieCardComponent } from './public/dashboard/movie-card/movie-card.component';
import { BookMovieComponent } from './public/dashboard/movie-card/book-movie/book-movie.component';

// Dependencies 
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faCog, faPlus, faPlusSquare, faEllipsisV, faTrash, faAngleDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { MatBadgeModule } from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { CoverBoxComponent } from './public/dashboard/cover-box/cover-box.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    AddMovieComponent,
    MovieCardComponent,
    BookMovieComponent,
    TopNavComponent,
    CoverBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatIconModule,
    CarouselModule,
    WavesModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, faCog, faPlus, faPlusSquare, faEllipsisV, faTrash, faAngleDown, faChevronDown);
  }
}
