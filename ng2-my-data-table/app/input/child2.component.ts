import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'child2',
    template: `
  <h1>Child</h1>
  {{"my-arr: "+my-arr}}

  `,
    inputs: ['my-arr'],


})
export class Child2Component {

    public constructor() {
    }

}