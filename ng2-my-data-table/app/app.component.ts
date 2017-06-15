import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular App</h1>

  <parent2></parent2>
  <router-outlet></router-outlet>

  

<!--  
  <table-demo></table-demo>
  <mission-control></mission-control>

  <parent></parent>
  <router-outlet></router-outlet>

  <parent2></parent2>
  <router-outlet></router-outlet>

-->
  `
})
export class AppComponent { }