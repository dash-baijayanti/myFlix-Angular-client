import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  imports: [MatCardModule, CommonModule],
})
export class UserProfileComponent implements OnInit {
  users: any = {
    userName: '',
    Email: '',
    password: '',
    birthDate: '',
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    const userName = localStorage.getItem('user');
    if (userName) {
      this.getUserDetails(userName);
    } else {
      this.snackBar.open('No user logged in. Redirecting to Welcome page.', 'OK', { duration: 3000 });
      this.router.navigate(['welcome']);
    }
  }

  /**
   * Fetches the user details from the API and updates the `users` object.
   * @param userName The logged-in user's username from localStorage.
   */
  getUserDetails(userName: string): void {
    this.fetchApiData.getUser(userName).subscribe({
      next: (resp) => {
        this.users = resp[0];
        console.log('User details fetched successfully:', this.users);
        console.log(this.users.birthDate);
      },
      error: (err) => {
        console.error('Error fetching user details:', err);
        this.snackBar.open('Failed to fetch user details. Please try again.', 'OK', { duration: 3000 });
      }
    });
  }

  /**
   * Navigates to the Movies page.
   */
  goToAllMovies(): void {
    this.router.navigate(['movies']);
  }

  /**
   * Navigates to the Welcome page.
   */
  goToWelcome(): void {
    this.router.navigate(['welcome']);
  }

  /**
   * Deletes the user account and redirects to the Welcome page.
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