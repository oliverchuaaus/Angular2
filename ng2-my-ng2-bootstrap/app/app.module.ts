import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule, ModalModule } from 'ng2-bootstrap';
import { ModalComponent } from './modal.component';
import { ModalUserComponent } from './modal.user.component';


import { AppComponent }   from './app.component';
import { CarouselComponent }   from './carousel.component';


@NgModule({
  imports:      [ BrowserModule, CarouselModule.forRoot(), ModalModule.forRoot()],
  declarations: [ AppComponent, CarouselComponent, ModalComponent, ModalUserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }