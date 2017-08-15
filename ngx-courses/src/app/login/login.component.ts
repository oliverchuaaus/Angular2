import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  fg: FormGroup;

  constructor(public authService: LoginService, public router: Router, public route: ActivatedRoute, fb:FormBuilder) {
    this.fg = fb.group({username: '', password: ''}); 
   }

  ngOnInit() {
  }


  login(fg:any) {
    this.authService.login(fg.username, fg.password).subscribe(
      userDetails => {
        this.authService.loginUserDetails(userDetails);
        let path = "/welcome";
        this.router.navigate([path]);
      }, 
      err => {this.handleError(err)}
    );
    return false;
  }

  logout() {
    this.authService.logout();
  }

  handleError(error: any): void {
    if (error.status == 0) {
      this.errorMessage = "Rest service is down"
    }
    else {
      this.errorMessage = JSON.parse(error._body);
    }
    setTimeout(function () {
      this.errorMessage = '';
    }.bind(this), 5000);
  }
}
