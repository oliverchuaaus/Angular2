import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class PersonDataDrivenService {

  constructor(private http:Http) { }

  public getDelayedJson(): Observable<any>{
    return this.getJson(10000);
  }

  public getJson(delay?): Observable<any> {
    return this.http.get("../assets/json/dummy.json")
      .map((res: any) => {    setTimeout( ()=> { res.json; }, delay);});
  }
}
