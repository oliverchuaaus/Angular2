import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'http',
  template: `
  <div><textarea #body></textarea></div>
  
  <button (click)="onPost(body.value)">Post</button>
   <button (click)="onPut(body.value)">Put</button>
  <button (click)="onGet()">Get</button>
  <button (click)="onDelete()">Delete</button>

  <div *ngIf="loading">Loading...</div>
  <div *ngIf="rrror">Error!</div>
   <div *ngIf="response">
  {{response|json}}
  </div>
  `
})
export class HttpComponent {
  constructor(public http: Http) { }

  response: string; 
  loading = false;
  error = false;

  onGet() {
    this.response = "";
    this.loading = true;
    this.error = false;
    this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe(
      (resp: Response) => { this.response = resp.json(); this.loading = false },
      (err: any) => { console.log(err); this.error = true; this.loading = false; });
  }


  onDelete() {
    this.response = "";
    this.loading = true;
    this.error = false;
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1').subscribe(
      (resp: Response) => { this.response = resp.json(); this.loading = false },
      (err: any) => { console.log(err); this.error = true; this.loading = false; });
  }


  onPost(body: string) {
    this.response = "";
    this.loading = true;
    this.error = false;
    
    let obj = {
      id: '1',
      body: `${body}`
    };
    let requestBody = JSON.stringify(obj);
    this.http.post('http://jsonplaceholder.typicode.com/posts', requestBody).subscribe(
      (resp: Response) => { this.response = resp.json(); this.loading = false },
      (err: any) => { console.log(err); this.error = true; this.loading = false; });
  }

  onPut(body: string) {
    this.response = "";
    this.loading = true;
    this.error = false;
    
    let obj = {
      id: '1',
      body: `${body}`
    };
    let requestBody = JSON.stringify(obj);
    this.http.put('http://jsonplaceholder.typicode.com/posts/1', requestBody).subscribe(
      (resp: Response) => { this.response = resp.json(); this.loading = false },
      (err: any) => { console.log(err); this.error = true; this.loading = false; });
  }


}