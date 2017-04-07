import { Component, OnInit } from '@angular/core';
import { CommService } from './comm.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'update',
    template: `
  <h1>Update</h1>
  PositionID: <input #positionID>
  <input type="button" (click)="findPosition(positionID.value)" value="Search"> 
  `
})
export class UpdateComponent implements OnInit{
    
    ngOnInit(){
        this.commService.updatePositionID("");
  }
    constructor(private commService: CommService) {
    }

    findPosition(positionID: string) {
        this.commService.updatePositionID(positionID);
    }

}