import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CharNavBarComponent }   from './ChatNavBar.component';
import { ChatThreadsComponent }   from './ChatThreads.component';
import { ChatWindowComponent }   from './ChatWindow.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CharNavBarComponent, ChatThreadsComponent, ChatWindowComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }