import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
<!--  
  <demo-form-ng-model></demo-form-ng-model>
  <demo-form-with-events></demo-form-with-events>
  <demo-form-with-custom-validations></demo-form-with-custom-validations>
  <demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>
  <demo-form-with-validations-explicit></demo-form-with-validations-explicit>
  <demo-form-sku-builder></demo-form-sku-builder>
  <demo-form-sku></demo-form-sku>
-->
  <demo-form-ng-model></demo-form-ng-model>
  `
})
export class AppComponent {
  onSubmit(form:any){
      console.log('submitted form: '+form.sku);
  }

 }