import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * @component
 * @name UserLoginFormComponent
 * @description
 * This component handles the user login form, including sending login data to the backend, 
 * managing authentication tokens, and showing appropriate notifications to the user.
 */
@Component({
  selector: 'app-user-login-form',
  standalone: false,
  templateUrl: './user-login-form.component.html',
  styleUrl: './user-login-form.component.scss'
})
export class UserLoginFormComponent implements OnInit {
  
  /**
   * @input
   * @description
   * This is the user object that will hold the user login details entered in the form.
   */
  @Input() users = { userName: '', password: '' };

  constructor(
    /**
     * @inject
     * @description
     * Service for making API calls to the backend.
     */
    public fetchApiData: FetchApiDataService,

    /**
     * @inject
     * @description
     * Reference to the dialog window that will be closed upon successful login.
     */
    public dialogRef: MatDialogRef<UserLoginFormComponent>,

    /**
     * @inject
     * @description
     * Service for showing notifications to the user.
     */
    public snackBar: MatSnackBar,

    /**
     * @inject
     * @description
     * Service for routing navigation after successful login.
     */
    private router: Router
  ) { }

  /**
   * @lifecycle
   * @description
   * ngOnInit lifecycle hook. This method is called once after the component is initialized.
   */
  ngOnInit(): void { }

  /**
   * @method
   * @name loginUser
   * @description
   * Sends the user's login details to the backend to authenticate the user. 
   * On success, the user's authentication token and username are stored in local storage, 
   * the login dialog is closed, and the user is redirected to the movies page.
   * In case of failure, an error message is displayed.
   */
  loginUser(): void {
    this.fetchApiData.userLogin(this.users).subscribe((result) => {
      // On successful login, store the token and user details
      localStorage.setItem('token', result.token);
      localStorage.setItem('users', result.users.userName);

      // Close the login dialog
      this.dialogRef.close();

      // Display success message
      this.snackBar.open('User Login Successful', 'OK', {
        duration: 6000
      });

      // Redirect to the movies page
      this.router.navigate(['movies']);
    }, (result) => {
      // In case of error, log the result and display an error message
      console.log(result);
      this.snackBar.open('User Login failed', 'OK', {
        duration: 6000
      });
    });
  }
}