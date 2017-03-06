import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Routes, Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'nested-route',
  template: `
  <h1>Routing</h1>
  <a routerLink="/home">Home</a>
  <a routerLink="/product">Product</a>
  <div>
  <router-outlet></router-outlet>
  </div>
  `
})
export class NestedComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
  }
}


