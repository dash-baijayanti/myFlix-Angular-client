import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component'; // Import UserProfileComponent

const routes: Routes = [
  { path: '', component: MovieCardComponent }, // Default path for the movie card component
  { path: 'profile', component: UserProfileComponent }, // Route for the profile page
  // Other routes can go here...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }