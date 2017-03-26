import { Component, } from '@angular/core';

import 'rxjs/Rx';

@Component({

  selector: 'my-app',
  template: `
  <h1>My First Angular App</h1>
  <simple-demo></simple-demo>

<!--  
  <single-upload></single-upload>
  <multipart-upload></multipart-upload>
  <simple-demo></simple-demo>
-->  
  `
})
export class AppComponent {
}