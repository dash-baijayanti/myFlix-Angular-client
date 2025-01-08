import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  standalone: false,

  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }
  
  ngOnInit(): void { }
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      // Assigning the dialog a width
      width: '280px'
    });
  }
 
}


