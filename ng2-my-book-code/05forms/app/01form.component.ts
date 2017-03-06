import { Component } from '@angular/core';

@Component({
  selector: 'my-form',
  template: `
  <form #f="ngForm" (ngSubmit)="submit(f.value)">
    <div>Submit Field</div>
    <div><input #pcode placeholder="pcode" name="pcode" ngModel></div>
    <div><button type="submit">Submit</button></div>
  </form>
  `
})
export class MyFormComponent {

  submit(myForm: any) {
    console.log("submitted " + myForm['pcode']);
    return false;
  }

}