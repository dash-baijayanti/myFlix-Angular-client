/**
 * @file app-routing.module.ts
 * @description This module defines and configures the routing for the Angular application, specifying routes and their associated components.
 * @module AppRoutingModule
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component'; // Import UserProfileComponent
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

/**
 * The routing configuration for the Angular application.
 * Defines paths and their corresponding components.
 * 
 * @constant {Routes} routes - An array of route objects that determine how the app navigates.
 * @description 
 * - The root path (`''`) loads the `WelcomePageComponent`.
 * - The `/profile` path loads the `UserProfileComponent`.
 * - The `/movies` path loads the `MovieCardComponent`.
 * - The `/welcome` path loads the `WelcomePageComponent`.
 * 
 * @example
 * // This is an example of how the routes are defined:
 * { path: '', component: WelcomePageComponent }
 */
const routes: Routes = [
  { path: '', component: WelcomePageComponent }, // Default path for the welcome page component
  { path: 'profile', component: UserProfileComponent }, // Route for the user profile page
  { path: 'movies', component: MovieCardComponent }, // Route for the movie card page
  { path: 'welcome', component: WelcomePageComponent } // Route for the welcome page
];

/**
 * This module is responsible for configuring the application's routing system.
 * It imports `RouterModule` and sets up the routes for the application.
 * The `AppRoutingModule` module is then imported into the root module.
 * 
 * @module AppRoutingModule
 * @class
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Setting up the routes for the app
  exports: [RouterModule] // Exporting RouterModule to be used in other parts of the app
})
export class AppRoutingModule { }