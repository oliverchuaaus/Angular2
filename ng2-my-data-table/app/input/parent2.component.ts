import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'parent2',
    template: `
  <h1>Parent</h1>
  <child2 [myArr1]="myArr"></child2>
  `
})
export class Parent2Component {
    private myArr:Array<number> = [1,4,6,8];


 }