import { Component } from '@angular/core';

import { MyService } from './my-service';
import { myServiceProvider } from './my-service-provider';
import { MyClass, MyAlpha } from './my-class';
import { BUGS, MY_TOKEN } from './my-config';

let myBeta = { name: 'Beta', male: false, age: 40, firstHobby: () => { } };

@Component({
  selector: 'my-app',
  template: `
  <h1>My Guide</h1>
  <my-compo></my-compo>
  `,

  //NB: These show how to declare service providers and classes they are dependent on
  //providers: [MyClass],
  //NB: Using a subclass: useClass
  //providers: [{ provide: MyClass, useClass: MyAlpha }],
  //NB: Using object in the shape of class: useValue
  //providers: [{ provide: MyClass, useValue: myBeta }],
  //NB: Using provider when param is dynamic
  //providers: [myServiceProvider, { provide: MyClass, useValue: myBeta }],
  //NB: Using provider when param is an interface
  providers: [{ provide: MY_TOKEN, useValue: BUGS }]
})

export class AppComponent {
}