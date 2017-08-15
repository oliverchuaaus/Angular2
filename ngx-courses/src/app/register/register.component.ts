import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  errorMessage: string;
  registerForm: FormGroup;

  constructor(public authService: LoginService, public router: Router, public route: ActivatedRoute, fb: FormBuilder) {
    this.registerForm = fb.group({ username: '', emailAddress: '', password: '', confirmPassword: '' });
  }

  ngOnInit() {
  }

  register(fg: any) {
    this.authService.register(fg.username, fg.emailAddress, fg.password).subscribe(
     registration => {
        console.log('registering:'+ JSON.stringify(fg));
      },
      err => { this.handleError(err) }
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
