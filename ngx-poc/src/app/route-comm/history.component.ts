import { Component,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'history',
  template: `
  <h1>History</h1>
  {{positionID}}

  <div *ngIf="!positionID">No productID</div>
  `,
  inputs: ['positionID']
})
export class HistoryComponent  { 
    positionID:string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.positionID = params['positionID']; });
  }

 

}