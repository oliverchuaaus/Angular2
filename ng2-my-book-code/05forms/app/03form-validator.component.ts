import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-form-validator',
  template: `
  <form [formGroup]="f" (ngSubmit)="submit(f.value)">
    <div>Validator:</div>
    <div><input placeholder="pcode" [formControl]="f.controls['pcode']" 
    [ngStyle] ="!f.valid && f.dirty ? { 'background-color':'red'} : { 'background-color':'transparent'}"></div>
    <div><button type="submit">Submit</button></div>

    <div *ngIf="!f.valid && f.dirty">Form is invalid</div>
  </form>
  `
})
export class MyFormValidatorComponent {
  f: FormGroup;

  constructor(builder: FormBuilder) {
    this.f = builder.group({ 'pcode': ['', Validators.required] });
  }

  submit(myForm: any) {
    console.log("submitted " + myForm['pcode']);
  }


}