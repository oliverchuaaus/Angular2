import { Component } from '@angular/core';
import {CommService} from './comm.service';

@Component({
  selector: 'route',
  template: `
  <h1>Route Communication</h1>
  <a routerLink="./update">Update</a>
  <a routerLink="./history/{{positionID}}">History</a>

  <router-outlet></router-outlet>
  `
})
export class RouteComponent {
    positionID:string;

  constructor(private commService: CommService) {
    commService.positionIDConfirmed$.subscribe(
      positionID => {
          console.log("informed route of positionID: "+ positionID);
          this.positionID=positionID;
      });
  }

}