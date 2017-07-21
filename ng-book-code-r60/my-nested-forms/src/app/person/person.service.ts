import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class PersonService {
  constructor(public http: Http) { }

  public getEmployeeAssessment(employeeAssessmentId: string): Observable<any> {
    return this.http.get("../assets/json/dummy.json")
      .map((res: any) => res.json());
  }

}