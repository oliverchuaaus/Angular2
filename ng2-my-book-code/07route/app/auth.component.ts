import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'auth-route',
  template: `
  <h1>Routing</h1>
  <a routerLink="/login">Login</a>
  <a routerLink="/home">Home</a>
  <a routerLink="/detail/1001">Detail</a>
  <a routerLink="/restricted">Restricted</a>
  <a routerLink="/about">About</a>
  <router-outlet></router-outlet>
  `
})
export class AuthComponent {

  constructor(public router: Router) {
  }
}


@Component({
  selector: 'restricted',
  template: `
  
  <h3>Restricted</h3>
  `
})
export class RestrictedComponent { }


@Component({
  selector: 'login',
  template: `
  <h3>Login Page</h3>
  <div *ngIf="!authService.isLoggedIn()"> 
  <input #username>
  <input type="password" #password>
  <button (click)="login(username.value, password.value)">Login</button>
  <div *ngIf="!errorMessage">{{errorMessage}}</div>
  </div>

   <div *ngIf="authService.isLoggedIn()">
      Logged in as {{authService.getUsername()}}.
      <a href="logout" (click)="logout()">Logout</a> 
   </div> 
  `
})
export class LoginComponent {
  errorMessage: string;
  constructor(private authService: AuthService) { }


  login(username: string, password: string) {
    let loggedIn = this.authService.login(username, password);
    if (!loggedIn) {
      this.errorMessage = "Login invalid";
      setTimeout(function () {
        this.errorMessage = '';
      }.bind(this), 2500);
    }
  }

  logout() {
    this.authService.logout();
  }

}

