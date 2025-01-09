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
    const userName = localStorage.getItem('users');
    if (userName) {
      this.getUserDetails();
    }
  }



  getUserDetails(): void {

    this.fetchApiData.editUser(this.users.userName, this.users).subscribe((resp) => {
      this.users = resp[0];
      // localStorage.getItem('user');
      console.log(this.users);
      return this.users;
      // this.router.navigate(['/']);

      // this.router.navigate(['welcome']);

    });

  }

  goToAllMovies(): void {
    this.router.navigate(['movies']);
  }

  goToWelcome(): void {
    this.router.navigate(['welcome']);
  }
  deleteUser(): void {
    // const user: any = JSON.parse(localStorage.getItem('users') as any);
    // this.fetchApiData.deleteUser(this.users.userName).subscribe((resp: any) => {
    //   console.log(resp);
    this.router.navigate(['welcome']);
  }

}




