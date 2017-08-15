import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.isLoggedIn()) {
      this.loginService.logout();
      this.router.navigate(["/login"]);
    }

  }

}
