import { Component } from '@angular/core';

@Component({
    selector: 'greeting',
    template: `
  <h4>Hello!</h4>
  <salutation></salutation>
  `
})
export class GreetingComponent { }


@Component({
    selector: 'salutation',
    template: `
  <h4>Salutations!</h4>
  `
})
export class SalutationComponent { }
