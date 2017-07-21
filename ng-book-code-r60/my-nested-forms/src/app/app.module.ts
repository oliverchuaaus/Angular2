import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { PersonComponent } from './person/person.component';

import { PersonService } from './person/person.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule, HttpModule,  FormsModule, ReactiveFormsModule,
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
