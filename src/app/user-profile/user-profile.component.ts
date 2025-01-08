import { Component } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
// import { MovieCardComponent } from '../movie-card/movie-card.component';
import { OnInit } from '@angular/core';
// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: false,

  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent implements OnInit {
  user: any = {};

  constructor(
    public fetchApiData: FetchApiDataService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }
  //  { this.user = JSON.parse(localStorage.getItem("user") || ""); }

  ngOnInit(): void {
    //  this.fetchApiData.getUser(this.user).subscribe((resp: any) => {
    //   this.user = resp;
    //   console.log('User data:', this.user); // Debug user data
    // Once user data is loaded, fetch and filter favorite movies
    // this.loadFavoriteMovies();
    // });
  }

  getUserDetails(userName: string): void {
    // const userName = localStorage.getItem('user'); 
    //    // Assuming the response contains a single user object
    //    if (userName) {

    this.fetchApiData.getUser(userName).subscribe((resp) => {
      this.user = resp; // Assuming the API returns the user's details
    }, (error) => {
      const userName = localStorage.getItem('user') || '';
      console.log(this.user.userNmae);
      if (!userName) {
        this.snackBar.open('No user logged in.', 'OK', { duration: 3000 });
        this.router.navigate(['/']);
      }
    });
  }
}


