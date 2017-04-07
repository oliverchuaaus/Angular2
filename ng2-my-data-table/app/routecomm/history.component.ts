import { Component,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'history',
  template: `
  <h1>History</h1>
  {{productID}}

  <div *ngIf="!productID">No productID </div>
  `,
  inputs: ['productID']
})
export class HistoryComponent  { 
    productID:string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.productID = params['productID']; });
  }

 

}