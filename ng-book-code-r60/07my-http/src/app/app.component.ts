import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message: Object;
  loading = false;

  constructor(private http: Http){}

  makeRequest() {
    this.message = null;
    this.loading = true;
    this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe(
      resp => {
        setTimeout(()=>{
        this.message = resp.json();
        this.loading = false;
        },5000);
        
      },
      (error:any) => {console.log("error! " +error)},
      () => {console.log("complete!")},
    );
  }
}
