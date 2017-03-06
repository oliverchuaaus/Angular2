import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular App</h1>
  <my-form></my-form>
  <my-form-builder></my-form-builder>
  <my-form-validator></my-form-validator>
  <my-form-validator-explicit></my-form-validator-explicit>
  <my-form-validator-shorthand></my-form-validator-shorthand>
  <my-form-validator-ngModel></my-form-validator-ngModel>
  
  `
})
export class AppComponent { }