import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular App</h1>
  <nested-route></nested-route>
<!--
  <simple-route></simple-route>
  <auth-route></auth-route>
  <nested-route></nested-route>
-->
  `
})
export class AppComponent { }