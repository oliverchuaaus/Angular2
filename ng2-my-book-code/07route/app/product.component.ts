import { Component} from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'main',
  template: `
  <h3>Main</h3>
  `
})
export class MainProductComponent {
}


@Component({
  selector: 'search',
  template: `
  <h3>Search</h3>
  `
})
export class SearchProductComponent {
}

@Component({
  selector: 'maintain',
  template: `
  <h3>Maintain</h3>
  `
})
export class MaintainProductComponent {
}

@Component({
  selector: 'detail',
  template: `
  <h3>Detail {{id}}</h3>
  `
})
export class DetailProductComponent {
    id: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });
  }
}


@Component({
  selector: 'product',
  template: `
  <h3>Product</h3>
  <a routerLink="./main">Main</a>
  <a routerLink="./search">Search</a>
  <a routerLink="./maintain">Maintain</a>
  <a routerLink="./detail/123456">Detail</a>
  <div>
  <router-outlet></router-outlet>
  </div>
  `
})
export class ProductComponent { }

export const childRoutes: Routes = [
  { path: '', redirectTo: 'maintain' },
  { path: 'main', component: MainProductComponent },
  { path: 'search', component: SearchProductComponent },
  { path: 'maintain', component: MaintainProductComponent },
  { path: 'detail/:id', component: DetailProductComponent },
];

