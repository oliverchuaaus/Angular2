import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'get',
  template:
  `
  <button (click)="getMessage()">Get!</button>
  {{message | json}}
  `
})
export class GetComponent {
  message: Object;

  constructor(private http: Http) { }

  getMessage() {
    this.http.get("http://jsonplaceholder.typicode.com/posts/1").subscribe(resp => { this.message = resp.json(); });

  }
}