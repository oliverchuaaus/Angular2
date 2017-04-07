import { Component } from '@angular/core';
@Component({
    selector: 'parent',
    template: `
  <h1>Parent</h1>
  <child2 [my-arr]="myArr"></child2>
  `
})
export class Parent2Component {
    private myArr:Array<number> = [1,4,6,8];


 }