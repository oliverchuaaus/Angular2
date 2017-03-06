import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { EntryFormComponent } from './EntryForm.component';
import { EntryItemComponent } from './EntryItem.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EntryFormComponent, EntryItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }