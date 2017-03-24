import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'my-modal-user',
    template: `
   <a class="btn btn-success" (click)="c.show2()">c.show2()</a>
   <a class="btn btn-success" (click)="show3()">show3()</a>

   <my-modal #c="child"></my-modal>    
    `
})
export class ModalUserComponent {
   @ViewChild('c') c;

  constructor(private viewContainerRef:ViewContainerRef) {
  }

  show3(){
      //this.c.showMessage("Hello World");
      this.c.showMessageCallback("Hello World", ()=>{console.log("Test")});
  }
}