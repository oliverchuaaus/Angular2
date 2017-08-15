import { Component, OnInit } from '@angular/core';
import { LoginService, UserDetails } from '../login/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userDetails: UserDetails;

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    this.userDetails = this.loginService.getUserDetails();
  }

}
