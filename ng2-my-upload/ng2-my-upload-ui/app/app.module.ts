import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SingleComponent } from './single.component';
import { MultipartComponent } from './multipart.component';
import { FileUploadComponent } from './fileUpload.component';
import { FileSelectDirective, FileUploader, FileDropDirective, FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [BrowserModule, HttpModule, FileUploadModule],
  declarations: [AppComponent, SingleComponent, MultipartComponent, FileUploadComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }