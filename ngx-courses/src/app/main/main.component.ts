import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AwsRolesService } from '../auth/aws-roles.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, public rolesService: AwsRolesService) { }
  isLoggedIn:boolean;

  ngOnInit() {
    this.authService.authStatusChanged.subscribe(
      (isLoggedIn: boolean) => this.isLoggedIn = isLoggedIn
    );    
  }

  hasRole(role: string) {
    return this.isLoggedIn && this.rolesService.hasRole(role);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(["/login"]);

  }  

}
