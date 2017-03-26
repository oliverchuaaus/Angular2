import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: 
  `
  <div>
    <nav>
      <a>Navigation:</a>
      <ul>
        <li><a [routerLink]="['home']">Home</a></li>
        <li><a [routerLink]="['about']">About</a></li>
        <li><a [routerLink]="['contact']">Contact us</a></li>
        <li><a [routerLink]="['/protected']">Protected</a></li>

      </ul>
    </nav>

    <router-outlet></router-outlet>
  </div>  


    <div id="content">
    <div class="container">

      <login></login>

      <hr>

      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class AppComponent { }