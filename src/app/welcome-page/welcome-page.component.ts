/**
 * @file welcome-page.component.ts
 * @description This component serves as the welcome page of the application. It handles user registration and login dialogs.
 * It uses Angular Material Dialog to show forms for user login and registration.
 * @module WelcomePageComponent
 */

import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

/**
 * @class
 * @description 
 * `WelcomePageComponent` is responsible for rendering the welcome page of the application.
 * It provides functionality to open the user registration and login dialogs.
 * 
 * It uses the `MatDialog` service to manage dialogs and the `Router` service for navigation.
 */
@Component({
  selector: 'app-welcome-page',
  standalone: false,
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent implements OnInit {

  /**
   * @constructor
   * @param {MatDialog} dialog - Angular Material Dialog service for managing dialogs.
   * @param {Router} router - Angular Router service for navigating between pages.
   * @description
   * Initializes the `WelcomePageComponent` with the necessary services.
   */
  constructor(
    public dialog: MatDialog, // Service for opening dialogs
    private router: Router // Service for routing between different pages
  ) { }
  
  /**
   * Lifecycle hook that is called when the component is initialized.
   * @method ngOnInit
   * @description
   * This component does not have specific logic in the `ngOnInit` lifecycle hook yet.
   */
  ngOnInit(): void { }

  /**
   * Opens the user registration dialog when called.
   * @method openUserRegistrationDialog
   * @description
   * This method opens a dialog with the `UserRegistrationFormComponent` inside it.
   * The dialog is set to a width of '280px'.
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px' // Sets the dialog width
    });
  }

  /**
   * Opens the user login dialog when called.
   * @method openUserLoginDialog
   * @description
   * This method opens a dialog with the `UserLoginFormComponent` inside it.
   * The dialog is set to a width of '280px'.
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px' // Sets the dialog width
    });
  }

}