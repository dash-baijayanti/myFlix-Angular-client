import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component'; // Import UserProfileComponent
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent }, // Default path for the movie card component
  { path: 'profile', component: UserProfileComponent }, // Route for the profile page
  // Other routes can go here...
  { path: 'movies', component: MovieCardComponent },
  { path: 'welcome', component: WelcomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }