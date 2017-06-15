import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { JQueryComponent }   from './jquery.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, JQueryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }