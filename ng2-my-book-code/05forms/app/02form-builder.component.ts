import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-form-builder',
  template: `
  <form [formGroup]="f" (ngSubmit)="submit(f.value)">
    <div>Submit Field with initial value:</div>
    <div><input placeholder="pcode" [formControl]="f.controls['pcode']"></div>
    <div><button type="submit">Submit</button></div>
  </form>
  `
})
export class MyFormBuilderComponent {
  f:FormGroup;

  constructor(builder:FormBuilder){
    this.f = builder.group({'pcode':['ABC123']});
  }

  submit(myForm: any) {
    console.log("submitted " + myForm['pcode']);
  }

}