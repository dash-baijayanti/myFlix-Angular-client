/**
 * @file user-registration-form.component.ts
 * @description This component handles user registration in the application. It manages user inputs for the registration form and interacts with the backend API to register a new user. 
 * It also displays success or error messages using the snack bar.
 * @module UserRegistrationFormComponent
 */

import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; // Used to close the dialog on success
import { FetchApiDataService } from '../fetch-api-data.service'; // Provides API calls for user registration
import { MatSnackBar } from '@angular/material/snack-bar'; // Used to display notifications to the user

/**
 * @description
 * The `UserRegistrationFormComponent` handles the user registration process. 
 * It allows users to input their registration details, submits them to the backend, and displays notifications based on the result.
 */
@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrl: './user-registration-form.component.scss',
  standalone: false
})
export class UserRegistrationFormComponent implements OnInit {

  /**
   * @description
   * This is the user model that holds the registration form fields.
   * @type {Object}
   */
  @Input() users = { userName: '', password: '', Email: '', birthDate: '' };

  /**
   * @constructor
   * @param {FetchApiDataService} fetchApiData - The service to make API calls for user registration.
   * @param {MatDialogRef<UserRegistrationFormComponent>} dialogRef - Reference to the dialog to close it upon success.
   * @param {MatSnackBar} snackBar - Used to show success/error messages to the user.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }

  /**
   * @method ngOnInit
   * @description
   * Lifecycle hook that is called after the component's view has been initialized.
   * Currently not implemented but can be used for additional initialization logic.
   */
  ngOnInit(): void {
  }

  /**
   * @method registerUser
   * @description
   * This method sends the user's registration details to the backend API via `FetchApiDataService`.
   * Upon successful registration, the dialog is closed, and a success notification is displayed. 
   * In case of an error, a failure notification is displayed.
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.users).subscribe((result) => {
      // Logic for a successful user registration goes here! (To be implemented)
      this.dialogRef.close(); // Close the dialog on success
      console.log(result);
      console.log(this.users);
      this.snackBar.open('User Registration Successful', 'OK', {
        duration: 6000 // Notification duration
      });
    }, (result) => {
      console.log(result);
      this.snackBar.open('User Registration Failed', 'OK', {
        duration: 6000 // Notification duration
      });
    });
  }
}