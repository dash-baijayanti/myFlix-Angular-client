import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const apiUrl = 'https://movie-api-7rmr.onrender.com/';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    if (!token) {
      console.error('No authentication token found');
      // Handle token missing case, like redirecting to login page
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token || ''}`
    });
  }

  private getToken(): string | null {
    try {
      return localStorage.getItem('token');
    } catch (e) {
      return null; // Fallback if localStorage is unavailable
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      // Handle Unauthorized error (like redirect to login)
      console.error('Unauthorized access - please log in');
    }
    return throwError(error.error?.message || 'An unexpected error occurred.');
  }

  // 1. User Registration
  public userRegistration(users: any): Observable<any> {
    return this.http.post(apiUrl + 'users', users).pipe(
      catchError(this.handleError)
    );
  }

  // 2. User Login
  public userLogin(users: any): Observable<any> {
    return this.http.post(apiUrl + 'login', users).pipe(
      catchError(this.handleError)
    );
  }

  // 3. Get All Movies
  public getAllMovies(): Observable<any> {
    return this.http.get(apiUrl + 'movies', { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 4. Get One Movie
  public getMovie(movieId: string): Observable<any> {
    return this.http.get(apiUrl + `movies/${movieId}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 5. Get Director
  public getDirector(directorName: string): Observable<any> {
    return this.http.get(apiUrl + `movies/directors/${directorName}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 6. Get Genre
  public getGenre(genreName: string): Observable<any> {
    return this.http.get(apiUrl + `movies/Genre/${genreName}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 7. Get User
  public getUser(userName: string): Observable<any> {
    return this.http.get(apiUrl + `users/${userName}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 8. Get Favorite Movies
  public getFavoriteMovies(): Observable<any> {
    return this.http.get(apiUrl + 'users/favorites', { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 9. Add a Movie to Favorites
  public addFavoriteMovie(movieId: string): Observable<any> {
    const userName = this.getToken(); // Ideally get the user from the token or session
    return this.http.post(apiUrl + `users/${userName}/movies/${movieId}`, null, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 10. Edit User
  public editUser(userDetails: any, userName: string): Observable<any> {
    return this.http.put(apiUrl + `users/${userName}`, userDetails, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 11. Delete User
  public deleteUser(userName: string): Observable<any> {
    return this.http.delete(apiUrl + `users/${userName}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 12. Delete Movie from Favorites
  public deleteFavoriteMovie(movieId: string): Observable<any> {
    const userName = this.getToken(); // Get the correct username from the token or session
    return this.http.delete(apiUrl + `users/${userName}/favMovies/${movieId}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }
}