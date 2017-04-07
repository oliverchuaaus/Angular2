import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class CommService {
  // Observable string sources
  private positionIDSource = new Subject<string>();
  // Observable string streams
  positionIDConfirmed$ = this.positionIDSource.asObservable();

  updatePositionID(positionID: string) {
    this.positionIDSource.next(positionID);
  }
}