import { Component, } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Component({

  selector: 'multipart-upload',
  template: `
  <input #pcode value="12334">
  <input #pname value="Kefir">
  <input id="single_f_fileup" type="file" (change)="uploadMultipart($event)" name="uploadFile" />
  `
})
export class MultipartComponent {
  apiEndPoint: string = 'http://localhost:8080/ng2-my-upload-rest/rest/ftr/uploadMultipart';

  constructor(private http: Http) { }

  uploadMultipart($event): void {
    var files = $event.target.files || $event.srcElement.files;
    var file = files[0];
    let formData = new FormData();
    formData.append("uploadFile", file);
    formData.append('key1', 'value1');
    formData.append('key2', 'value2');
    var req = new XMLHttpRequest();
    req.open("POST", `${this.apiEndPoint}`);
    req.send(formData);
  }

  selectFile(event) {
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