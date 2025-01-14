/**
 * @file FetchApiDataService
 * @description This service handles all HTTP requests to the API for the myFlix application.
 * It includes methods for user authentication, movie retrieval, and user data management.
 * @module FetchApiDataService
 */

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const apiUrl = 'https://movie-api-7rmr.onrender.com/';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  /**
   * @constructor
   * @param {HttpClient} http - Angular's HttpClient for handling HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Retrieves authorization headers for HTTP requests.
   * @private
   * @returns {HttpHeaders} The HTTP headers containing the user's token.
   */
  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token || ''}`
    });
  }

  /**
   * Fetches the user's token from local storage.
   * @private
   * @returns {string | null} The user's authentication token, or null if not found.
   */
  private getToken(): string | null {
    try {
      return localStorage.getItem('token');
    } catch (e) {
      return null;
    }
  }

  /**
   * Handles errors from HTTP requests.
   * @private
   * @param {HttpErrorResponse} error - The HTTP error response.
   * @returns {Observable<never>} An observable that throws an error message.
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      console.error('Unauthorized access - please log in');
    }
    return throwError(error.error?.message || 'An unexpected error occurred.');
  }

  /**
   * Registers a new user.
   * @param {object} users - The user's registration details.
   * @returns {Observable<any>} The API response.
   */
  public userRegistration(users: any): Observable<any> {
    return this.http.post(apiUrl + 'users', users).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Logs in a user.
   * @param {object} users - The user's login credentials.
   * @returns {Observable<any>} The API response with the user's token.
   */
  public userLogin(users: any): Observable<any> {
    return this.http.post(apiUrl + 'login', users).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Retrieves all movies from the API.
   * @returns {Observable<any>} An array of all movies.
   */
  public getAllMovies(): Observable<any> {
    return this.http.get(apiUrl + 'movies', { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Retrieves a specific movie by its ID.
   * @param {string} movieId - The ID of the movie.
   * @returns {Observable<any>} The movie details.
   */
  public getMovie(movieId: string): Observable<any> {
    return this.http.get(apiUrl + `movies/${movieId}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Retrieves details about a specific director.
   * @param {string} directorName - The name of the director.
   * @returns {Observable<any>} The director's details.
   */
  public getDirector(directorName: string): Observable<any> {
    return this.http.get(apiUrl + `movies/directors/${directorName}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Retrieves details about a specific genre.
   * @param {string} genreName - The name of the genre.
   * @returns {Observable<any>} The genre details.
   */
  public getGenre(genreName: string): Observable<any> {
    return this.http.get(apiUrl + `movies/Genre/${genreName}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Retrieves details of a user by their username.
   * @param {string} userName - The username of the user.
   * @returns {Observable<any>} The user's details.
   */
  public getUser(userName: string): Observable<any> {
    return this.http.get(apiUrl + `users/${userName}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Retrieves a user's favorite movies.
   * @returns {Observable<any>} An array of the user's favorite movies.
   */
  public getFavoriteMovies(): Observable<any> {
    return this.http.get(apiUrl + 'users/favorites', { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Adds a movie to the user's favorites.
   * @param {string} movieId - The ID of the movie to add.
   * @returns {Observable<any>} The updated list of favorite movies.
   */
  public addFavoriteMovie(movieId: string): Observable<any> {
    const userName = this.getToken();
    return this.http.post(apiUrl + `users/${userName}/movies/${movieId}`, null, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Updates the user's profile information.
   * @param {object} userDetails - The updated user details.
   * @param {string} userName - The username of the user.
   * @returns {Observable<any>} The updated user details.
   */
  public editUser(userDetails: any, userName: string): Observable<any> {
    return this.http.put(apiUrl + `users/${userName}`, userDetails, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Deletes a user's account.
   * @param {string} userName - The username of the user to delete.
   * @returns {Observable<any>} Confirmation of the deletion.
   */
  public deleteUser(userName: string): Observable<any> {
    return this.http.delete(apiUrl + `users/${userName}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Removes a movie from the user's favorites.
   * @param {string} movieId - The ID of the movie to remove.
   * @returns {Observable<any>} The updated list of favorite movies.
   */
  public deleteFavoriteMovie(movieId: string): Observable<any> {
    const userName = this.getToken();
    return this.http.delete(apiUrl + `users/${userName}/favMovies/${movieId}`, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }
}