import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @component
 * @name MovieCardComponent
 * @description
 * This component displays a list of movies, allows users to view movie details, add/remove movies to/from their favorites, 
 * and navigate to the user's profile page.
 */
@Component({
  selector: 'app-movie-card',
  standalone: false,

  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit {

  /**
   * @var {any[]} movies
   * @description
   * An array that holds all the movies retrieved from the API.
   */
  movies: any[] = [];

  /**
   * @var {any} user
   * @description
   * An object that stores the current user details (if needed for the component functionality).
   */
  user: any = {};

  /**
   * @constructor
   * @param {FetchApiDataService} fetchApiData
   * @param {Router} router
   * @param {MatSnackBar} snackBar
   * @description
   * Initializes the MovieCardComponent with dependencies for API calls, navigation, and displaying snack bar messages.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  /**
   * @method ngOnInit
   * @description
   * Called when the component is initialized. Retrieves the list of movies.
   */
  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * @method getMovies
   * @description
   * Fetches all the movies from the API and assigns them to the `movies` array.
   * It also logs the movies to the console.
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * @method goToUserProfile
   * @description
   * Navigates the user to their profile page.
   */
  goToUserProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
   * @method showGenreAlert
   * @param {any} genre
   * @description
   * Displays an alert with the movie genre.
   */
  showGenreAlert(genre: any): void {
    alert(genre);
  }

  /**
   * @method showDirectorAlert
   * @param {any} director
   * @description
   * Displays an alert with the movie director.
   */
  showDirectorAlert(director: any): void {
    alert(director);
  }

  /**
   * @method showMovieDetails
   * @param {any} movie
   * @description
   * Displays an alert with the movie details.
   */
  showMovieDetails(movie: any): void {
    alert(movie);
  }

  /**
   * @method addToFavorites
   * @param {any} movie
   * @description
   * Adds or removes a movie from the user's list of favorite movies.
   * If the movie is already in the favorites, it will be removed; otherwise, it will be added.
   * Displays a snack bar message indicating whether the movie was added or removed from favorites.
   */
  addToFavorites(movie: any): void {
    if (movie.isFavorite) {
      // Remove from favorites
      this.fetchApiData.deleteFavoriteMovie(movie._id).subscribe(() => {
        movie.isFavorite = false;
        this.snackBar.open(`${ movie.Title } removed from favorites`, 'OK', {
          duration: 2000
        });
      });
    } else {
      // Add to favorites
      this.fetchApiData.addFavoriteMovie(movie._id).subscribe(() => {
        movie.isFavorite = true;
        this.snackBar.open(`${ movie.Title } added to favorites`, 'OK', {
          duration: 2000
        });
      });
    }
  }
}