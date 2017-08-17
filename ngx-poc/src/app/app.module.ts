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

//route-comm
import { routes as childRoutes, RouteCommModule } from './route-comm/route-comm.module';
import { RouteComponent } from './route-comm/route.component';
import { CommService } from './route-comm/comm.service';

//expression-changed
import { ExpressionChangedComponent, AComponent, BComponent, ToggleComponent, TogglerComponent } from './expression-changed/expression-changed.component';
import { ExpressionService } from './expression-changed/expression.service';
import { LifecycleComponent, LifecycleAComponent, LifecycleBComponent } from './lifecycle/lifecycle.component';

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'datepicker', component: DatepickerComponent, pathMatch: 'full' },
  { path: 'nested-form', component: PersonComponent, pathMatch: 'full' },
  { path: 'data-table', component: TableDemoComponent, pathMatch: 'full' },
  { path: 'route-comm', component: RouteComponent, children: childRoutes },
  { path: 'expression-changed', component: ExpressionChangedComponent, children: childRoutes },
  { path: 'lifecycle', component: LifecycleComponent, pathMatch: 'full' },
];

export const menuItems: MenuItem[] = [
  { label: 'intro', name: 'Intro', path: '', component: IntroComponent },
  { label: 'datepicker', name: 'Date Picker', path: 'datepicker', component: DatepickerComponent },
  { label: 'nested-form', name: 'Nested Form', path: 'nested-form', component: PersonComponent },
  { label: 'route-comm', name: 'Route Communication', path: 'route-comm', component: RouteComponent },
  { label: 'expression-changed', name: 'Expression Changed', path: 'expression-changed', component: ExpressionChangedComponent },
  { label: 'lifecycle', name: 'Lifecycle', path: 'lifecycle', component: LifecycleComponent },
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
    //route-comm
    RouteComponent,
    //expression
    ExpressionChangedComponent, AComponent, BComponent, ToggleComponent, TogglerComponent,
    //Lifecycle
    LifecycleComponent, LifecycleAComponent, LifecycleBComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), CalendarModule, NoopAnimationsModule, FormsModule,
    ReactiveFormsModule, HttpModule, Ng2TableModule, PaginationModule.forRoot(), BsDropdownModule.forRoot(),
    RouteCommModule
  ],
  providers: [{ provide: 'menuItems', useValue: menuItems },
    PersonService, CommService, ExpressionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

