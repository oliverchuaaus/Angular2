import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AwsRolesService } from '../auth/aws-roles.service';
import { AuthService } from '../auth/auth.service';
import { Role } from '../auth/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public roleService: AwsRolesService, private authService: AuthService) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.roleService.getRoleList();
    }
   
  }

  ngOnDestroy() {
  }

}
