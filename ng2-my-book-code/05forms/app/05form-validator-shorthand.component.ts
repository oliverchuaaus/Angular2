import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-form-validator-shorthand',
  template: `
  <form [formGroup]="f" (ngSubmit)="submit(f.value)">
    <div>Shorthand Validator:</div>
    <div><input placeholder="pcode" [formControl]="f.controls['pcode']" 
    [ngStyle] ="!f.controls['pcode'].valid && f.controls['pcode'].dirty ? { 'background-color':'red'} : { 'background-color':'transparent'}">
    <div *ngIf="!f.controls['pcode'].valid && f.controls['pcode'].dirty">Product Code is invalid</div>
    <div *ngIf="f.controls['pcode'].hasError('required') && f.controls['pcode'].dirty">Product Code is required</div>
    </div>
    
    <div><button type="submit">Submit</button></div>

    <div *ngIf="!f.valid && f.dirty">Form is invalid</div>
  </form>
  `
})
export class MyFormValidatorShorthandComponent {
  f: FormGroup;

  constructor(builder: FormBuilder) {
    this.f = builder.group({ 'pcode': ['', Validators.required] });
  }

  submit(myForm: any) {
    console.log("submitted " + myForm['pcode']);
  }


}