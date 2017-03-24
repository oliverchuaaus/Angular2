import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-modal',
  exportAs: 'child',
  template: `
<button type="button" class="btn btn-primary" (click)="staticModal.show()">Static modal</button>

<button type="button" class="btn btn-primary" (click)="show2()">Static modal 2</button>
 
<div class="modal fade" bsModal #staticModal="bs-modal"
 [config]="{backdrop: 'static'}"
     tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title pull-left">Static modal</h4>
        <button type="button" class="close pull-right" aria-label="Close" (click)="staticModal.hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">{{message}}</div>
    </div>
  </div>
</div>
 `
})
export class ModalComponent {
  public message:string = "This is static modal, backdrop click will not close it. Click <b>&times;</b> to close modal.";

  @ViewChild('staticModal') staticModal;

  show2() {
    this.staticModal.show();
  }

  showMessage(str:string){
    this.message=str;
    this.staticModal.show();
  }

  showMessageCallback(str:string, f:Function){
    this.message=str;
    this.staticModal.show();
    f();
  }
}
