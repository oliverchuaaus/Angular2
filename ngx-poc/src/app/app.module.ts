import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuItem } from './menuitem.model';
import { IntroComponent } from './intro/intro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Date Picker
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CalendarModule } from 'primeng/primeng';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//nested forms
import { PersonComponent } from './nested-forms/person/person.component';
import { PersonService } from './nested-forms/person/person.service';
import { AddressComponent } from './nested-forms/address/address.component';


const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'datepicker', component: DatepickerComponent, pathMatch: 'full' },
  { path: 'nested-form', component: PersonComponent, pathMatch: 'full' },
];

export const menuItems: MenuItem[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  { label: 'datepicker', name: 'Date Picker', path: 'datepicker', component: DatepickerComponent },
  { label: 'nested-form', name: 'Nested Form', path: 'nested-form', component: PersonComponent },
];

@NgModule({
  declarations: [
    AppComponent, SidebarComponent, IntroComponent, 
    //Datepicker 
    DatepickerComponent,

    //Nested Forms
    PersonComponent, AddressComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), CalendarModule, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpModule
  ],
  providers: [{ provide: 'menuItems', useValue: menuItems },
    //Nested Forms
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
