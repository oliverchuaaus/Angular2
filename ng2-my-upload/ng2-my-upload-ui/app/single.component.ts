import { Component, } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Component({

  selector: 'single-upload',
  template: `
  <input type="file" placeholder="Choose file" accept=".csv"  (change)="fileChange($event)" name="file">
  `
})
export class SingleComponent {
  apiEndPoint: string = 'http://localhost:8080/ng2-my-upload-rest/rest/ftr/upload';

  constructor(private http: Http) { }


  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      this.http.post(`${this.apiEndPoint}`, formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
        data => console.log('success'),
        error => console.log(error)
        )
    }
  }
}