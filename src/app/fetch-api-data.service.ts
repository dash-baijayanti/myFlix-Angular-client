import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://movie-api-7rmr.onrender.com/';
const token = (() => {
  try {
    return localStorage.getItem('token');
  } catch (e) {
    return null; // Fallback if localStorage is unavailable
  }
})();

@Injectable({
  providedIn: 'root'
})

export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${ token }`
    });
  }

  //1.User Registration
  public userRegistration(users: any): Observable<any> {
    console.log(users);
    return this.http.post(apiUrl + 'users', users).pipe(
      catchError(this.handleError)
    );
  }

  // 2.User Login
  public userLogin(users: any): Observable<any> {
    console.log(users);
    return this.http.post(apiUrl + 'login', users).pipe(
      catchError(this.handleError)
    );
  }

  // 3.Get all Movies
  public getAllMovies(): Observable<any> {
    return this.http.get(apiUrl + 'movies', {
      headers: this.getHeaders()
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // 4.Get one movie
  public getMovie(movieId: string): Observable<any> {
    return this.http.get(apiUrl + `movies/${ movieId }`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 5. Get Director
  public getDirector(directorName: string): Observable<any> {
    return this.http.get(apiUrl + `movies/directors/${ directorName }`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 6. Get Genre
  public getGenre(genreName: string): Observable<any> {
    return this.http.get(apiUrl + `movies/Genre/${ genreName }`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 7. Get User
  public getUser(userName: string): Observable<any> {
    const url = `${ apiUrl }users/${ userName }`;
    return this.http.get(url, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 8. Get Favorite Movies for a User
  public getFavoriteMovies(): Observable<any> {
    return this.http.get(apiUrl + 'users/favorites', { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 9. Add a Movie to Favorite Movies
  public addFavoriteMovie(movieId: string): Observable<any> {
    return this.http.post(apiUrl + `users/userName/movies/${ movieId }`, null, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 10. Edit User
  public editUser(userDetails: any, userName: string): Observable<any> {
    return this.http.put(apiUrl + `users/${ userName }`, userDetails, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 11. Delete User
  public deleteUser(userName: string): Observable<any> {
    return this.http.delete(apiUrl + `users/${ userName }`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // 12. Delete a Movie from Favorite Movies
  public deleteFavoriteMovie(movieId: string): Observable<any> {
    return this.http.delete(apiUrl + `users/userName/movies/${ movieId }`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${ error.status }, ` +
        `Error body is: ${ error.error }`
      );
    }
    return throwError(error.error?.message || 'An unexpected error occurred.');
  }

  // Non-typed response extraction
  private extractResponseData(res: any): any {
    return res || {};
  }
}

