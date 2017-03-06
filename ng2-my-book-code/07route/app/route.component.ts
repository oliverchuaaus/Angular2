import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'simple-route',
  template: `
  <h1>Routing</h1>
  <a routerLink="/home">Home</a>
  <a routerLink="/detail/1001">Detail</a>
  <a routerLink="/about">About</a>
  <router-outlet></router-outlet>

  `
})
export class RouteComponent { }


@Component({
  selector: 'home',
  template: `
  <h3>Home</h3>
  `
})
export class HomeComponent { }

@Component({
  selector: 'detail',
  template: `
  <h3>Detail {{id}}</h3>
  `
})
export class DetailComponent {
  id: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });
  }
}

@Component({
  selector: 'about',
  template: `
  <h3>About</h3>
  `
})
export class AboutComponent { }