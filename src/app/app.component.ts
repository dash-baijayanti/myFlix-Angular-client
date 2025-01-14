/**
 * @file app.component.ts
 * @description The root component of the Angular application. Serves as the entry point and primary container for the app.
 * @module AppComponent
 */

import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

/**
 * The root component of the Angular application.
 * 
 * @class AppComponent
 * @description This component initializes the application and sets up its primary structure.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /** 
   * @property {string} Title - The title of the application displayed in the header or browser tab.
   */
  Title = 'myFlix-Angular-client';
}
