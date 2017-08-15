import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap';

//Base
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuItem } from './menuitem.model';
import { IntroComponent } from './intro/intro.component';

//Date Picker
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CalendarModule } from 'primeng/primeng';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//nested forms
import { PersonComponent } from './nested-forms/person/person.component';
import { PersonService } from './nested-forms/person/person.service';
import { AddressComponent } from './nested-forms/address/address.component';

//data-table
import { TableDemoComponent } from './data-table/data-table.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap';

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'datepicker', component: DatepickerComponent, pathMatch: 'full' },
  { path: 'nested-form', component: PersonComponent, pathMatch: 'full' },
  { path: 'data-table', component: TableDemoComponent, pathMatch: 'full' },
];

export const menuItems: MenuItem[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  { label: 'datepicker', name: 'Date Picker', path: 'datepicker', component: DatepickerComponent },
  { label: 'nested-form', name: 'Nested Form', path: 'nested-form', component: PersonComponent },
  { label: 'data-table', name: 'Data Table', path: 'data-table', component: TableDemoComponent },
];

@NgModule({
  declarations: [
    AppComponent, SidebarComponent, IntroComponent,
    //Datepicker 
    DatepickerComponent,
    //Nested Forms
    PersonComponent, AddressComponent,
    //Data-Table
    TableDemoComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), CalendarModule, NoopAnimationsModule, FormsModule,
    ReactiveFormsModule, HttpModule, Ng2TableModule, PaginationModule.forRoot(), BsDropdownModule.forRoot(),
  ],
  providers: [{ provide: 'menuItems', useValue: menuItems },
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

