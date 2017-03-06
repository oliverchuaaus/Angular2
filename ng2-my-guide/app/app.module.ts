import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCompoComponent } from './my-compo.component';

import { MyService } from './my-service';
import { MyClass } from './my-class';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MyCompoComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }