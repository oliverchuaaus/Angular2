import { Component, Input, OnInit } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'child2',
    template: `
  <h1>Child</h1>
  {{"myArr1: "+myArr1}}

  `,
    inputs: ['myArr1'],
    //input name cannot have -

})
export class Child2Component {

    public constructor() {
    }

}