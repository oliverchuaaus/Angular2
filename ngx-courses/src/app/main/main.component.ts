import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.loginService.getUsername() != null;
  }  

  hasRole(role: string) {
    return this.isLoggedIn() && this.loginService.hasRole(role);
  }

}
