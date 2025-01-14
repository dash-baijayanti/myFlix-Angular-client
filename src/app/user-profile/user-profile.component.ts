import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

/**
 * @component
 * @name UserProfileComponent
 * @description
 * This component handles user profile functionalities, such as displaying user details, editing profile information,
 * navigating to other pages (Movies or Welcome), and deleting the user account.
 * It uses Angular services to communicate with the backend API and display relevant information or errors to the user.
 */
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  imports: [MatCardModule, CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
})
export class UserProfileComponent implements OnInit {

  /**
   * @description
   * The `users` object contains details of the currently logged-in user.
   * These details are displayed in the profile and can be edited.
   * @type {object}
   * @property {string} userName - The user's username.
   * @property {string} Email - The user's email address.
   * @property {string} password - The user's password.
   * @property {string} birthDate - The user's birth date.
   */
  users: any = {
    userName: '',
    Email: '',
    password: '',
    birthDate: '',
  };

  /**
   * @constructor
   * @param {FetchApiDataService} fetchApiData - Service for interacting with the backend API.
   * @param {MatSnackBar} snackBar - Service for displaying notification messages to the user.
   * @param {Router} router - Service for navigating between application views.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  /**
   * @description
   * This lifecycle hook is called when the component is initialized.
   * It retrieves the logged-in user's username from `localStorage` and fetches the user's profile details.
   */
  ngOnInit(): void {
    const userName = localStorage.getItem('users');
    console.log('Retrieved userName:', userName);  // Check if userName is correctly retrieved
    if (userName) {
      this.getUserDetails(userName);
    } else {
      this.snackBar.open('No user logged in. Redirecting to Welcome page.', 'OK', { duration: 3000 });
      this.router.navigate(['welcome']);
    }
  }

  /**
   * @description
   * Fetches the user details from the backend API and updates the `users` object.
   * This method is called when the component is initialized to retrieve the profile information of the logged-in user.
   * @param {string} userName - The logged-in user's username, retrieved from localStorage.
   */
  getUserDetails(userName: string): void {
    this.fetchApiData.getUser(userName).subscribe({
      next: (resp) => {
        console.log('API Response:', resp);  // Log the entire response for debugging
        if (resp && resp[0]) {
          this.users = resp[0];
          console.log('User details fetched successfully:', this.users);
        } else {
          console.error('No user details available');
          this.snackBar.open('Failed to fetch user details. Please try again.', 'OK', { duration: 3000 });
        }
      },
      error: (err) => {
        console.error('Error fetching user details:', err);
        this.snackBar.open('Failed to fetch user details. Please try again.', 'OK', { duration: 3000 });
      }
    });
  }

  /**
   * @description
   * This method is triggered when the user clicks on the "Edit" button to update their profile details.
   * It sends the updated user details to the backend API for updating the user's profile information.
   */
  onEditUser(): void {
    const userName = this.users.userName;
    const updatedUserDetails = {
      Email: this.users.Email,
      password: this.users.password,
      birthDate: this.users.birthDate
    };

    this.fetchApiData.editUser(updatedUserDetails, userName).subscribe({
      next: (resp) => {
        console.log('User details updated successfully:', resp);
        this.snackBar.open('Your profile has been updated.', 'OK', { duration: 3000 });
      },
      error: (err) => {
        console.error('Error updating user details:', err);
        this.snackBar.open('Failed to update your details. Please try again.', 'OK', { duration: 3000 });
      }
    });
  }

  /**
   * @description
   * Navigates to the Movies page.
   * This method is triggered when the user clicks on the "Movies" button in the profile section.
   */
  goToAllMovies(): void {
    this.router.navigate(['movies']);
  }
  /**
  * @description
  * Navigates to the Welcome page.
  * This method is triggered when the user clicks on the "Welcome" button in the profile section.
  */
  goToWelcome(): void {
    this.router.navigate(['welcome']);
  }

  /**
   * @description
   * Deletes the user's account and redirects the user to the Welcome page.
   * This method is triggered when the user clicks on the "Delete Account" button in the profile section.
   */
  deleteUser(): void {
    const userName = this.users.userName;
    if (userName) {
      this.fetchApiData.deleteUser(userName).subscribe({
        next: () => {
          console.log('User deleted successfully.');
          this.snackBar.open('Your account has been deleted.', 'OK', { duration: 3000 });
          localStorage.clear(); // Clear all localStorage data
          this.router.navigate(['welcome']);
        },
        error: (err) => {
          console.error('Error deleting user:', err);
          this.snackBar.open('Failed to delete account. Please try again.', 'OK', { duration: 3000 });
        }
      });
    } else {
      this.snackBar.open('No user found. Unable to delete account.', 'OK', { duration: 3000 });
    }
  }
}