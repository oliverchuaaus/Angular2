import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
 
// const URL = '/api/';
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = 'http://localhost:8080/ng2-my-upload-rest/rest/ftr/uploader';
 
@Component({
  selector: 'simple-demo',
  templateUrl: '/app/fileUpload.html'
})
export class FileUploadComponent {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  uploadFile(){
      this.uploader.uploadAll();
  }
}