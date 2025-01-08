import { Component } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
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
  //  { this.user = JSON.parse(localStorage.getItem("user") || ""); }

  ngOnInit(): void {
    this.getUserDetails(this.users);
  }



  getUserDetails(userName: string): void {
    // const userName = localStorage.getItem('user'); 
    //    // Assuming the response contains a single user object
    //    if (userName) {

    this.fetchApiData.getUser(userName).subscribe((resp) => {
      this.users = resp; // Assuming the API returns the user's details
      console.log(this.users.userNmae);
    }, (error) => {
      const userName = localStorage.getItem('user') || '';
      console.log(this.users.userName);
      if (!userName) {
        this.snackBar.open('No user logged in.', 'OK', { duration: 3000 });
        this.router.navigate(['/']);
       
        this.router.navigate(['welcome']);
      }
    });

  }

  goToAllMovies(): void {
    this.router.navigate(['movies']);
  }

  goToWelcome(): void{
    this.router.navigate(['welcome']);
  }
}


