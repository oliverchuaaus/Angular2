import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `

  <div>
  <chat-nav-bar></chat-nav-bar> 
  </div>

  <div style="float:clear;">
  <chat-threads></chat-threads>
  </div>

  <div>
  <chat-window></chat-window>
  </div>
  `
})
export class AppComponent { }