import { Component, Input, OnInit } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'child',
    template: `
  <h1>Child</h1>
  {{"myArray: "+myArray}}
  `,


})
export class ChildComponent implements OnInit{
    @Input('my-arr')
    myArray;

    public constructor() {
        console.log("in constructor:" + this.myArray);
    }

    ngAfterViewInit() {
        console.log("in ngAfterViewInit:" + this.myArray);
    }

    ngOnInit() {
        console.log("in ngOnInit:" + this.myArray);
    }
}