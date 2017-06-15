import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'parent',
    template: `
  <h1>Parent</h1>
  <child [my-arr]="myArr"></child>
  `
})
export class ParentComponent {
    myArr = [1,4,6,8];


 }