import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-form-validator-explicit',
  template: `
  <form [formGroup]="f" (ngSubmit)="submit(f.value)">
    <div>Explicit Validator:</div>
    <div><input placeholder="pcode" [formControl]="pcode" 
    [ngStyle] ="!pcode.valid && pcode.dirty ? { 'background-color':'red'} : { 'background-color':'transparent'}">
    <div *ngIf="!pcode.valid && pcode.dirty">Product Code is invalid</div>
    <div *ngIf="pcode.hasError('required') && pcode.dirty">Product Code is required</div>
    </div>
    <div><button type="submit">Submit</button></div>
    <div *ngIf="!f.valid && f.dirty">Form is invalid</div>
  </form>
  `
})
export class MyFormValidatorExplicitComponent {
  f: FormGroup;
  pcode: AbstractControl;

  constructor(builder: FormBuilder) {
    this.f = builder.group({ 'pcode': ['', Validators.required] });
    this.pcode = this.f.controls['pcode'];
  }

  submit(myForm: any) {
    console.log("submitted " + myForm['pcode']);
  }


}