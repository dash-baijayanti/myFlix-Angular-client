import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-movie-card',
  standalone: false,

  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  user: any = {};

  constructor(
    public fetchApiData: FetchApiDataService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
      duration: 6000
    });
  }
  // Method to navigate to user profile page
  goToUserProfile(): void {
    this.router.navigate(['profile']);
  }

  showGenreAlert(genre: any): void {
    alert(genre);
  }

  showDirectorAlert(director: any): void {
    alert(director);
  }

  showMovieDetails(movie: any): void {
    alert(movie)
  }

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
