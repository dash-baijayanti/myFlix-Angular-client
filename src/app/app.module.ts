/**
 * @file app.module.ts
 * @description The main module of the Angular application that configures and initializes the app.
 * It defines the root components, imports necessary modules, and sets up providers.
 * @module AppModule
 */

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { FetchApiDataService } from './fetch-api-data.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

/**
 * Application routes configuration.
 * 
 * @constant {Routes} appRoutes
 * @property {string} path - The route's path in the application.
 * @property {Component} component - The component to be rendered for the route.
 * @property {string} redirectTo - (Optional) Redirects to the specified path.
 * @property {string} pathMatch - (Optional) Specifies the matching strategy, such as 'prefix' or 'full'.
 */
const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

/**
 * The root module of the Angular application.
 * 
 * @class AppModule
 * @description Configures the application module by importing required Angular and third-party modules,
 * declaring components, and providing necessary services and configurations.
 */
@NgModule({
  declarations: [
    AppComponent, // The root component of the application.
    UserRegistrationFormComponent, // Component for user registration.
    UserLoginFormComponent, // Component for user login.
    MovieCardComponent, // Component for displaying movie cards.
    WelcomePageComponent // Component for the welcome page.
  ],
  imports: [
    BrowserModule, // Provides services for running the app in the browser.
    HttpClientModule, // Provides HTTP client services for making API requests.
    AppRoutingModule, // Configures routing within the app.
    FormsModule, // Adds support for template-driven forms.
    BrowserAnimationsModule, // Enables animations for Material Design components.
    MatDialogModule, // Provides Material Dialog module.
    MatInputModule, // Provides Material Input module.
    MatIconModule, // Provides Material Icon module.
    MatButtonModule, // Provides Material Button module.
    MatCardModule, // Provides Material Card module.
    MatFormFieldModule, // Provides Material Form Field module.
    MatSnackBarModule // Provides Material Snack Bar module for notifications.
  ],
  providers: [
    provideClientHydration(withEventReplay()), // Enables client-side hydration with event replay for SSR.
    provideAnimationsAsync(), // Asynchronously provides animations for the app.
    provideHttpClient(withFetch()) // Configures the HttpClient to use the Fetch API.
  ],
  bootstrap: [AppComponent] // Specifies the root component to bootstrap the application.
})
export class AppModule {}