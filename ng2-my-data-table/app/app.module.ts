import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { TableDemoComponent }   from './datatable/data-table.component';
import {Ng2TableModule} from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap';
import { MissionControlComponent } from './communication/mission.component';
import { AstronautComponent } from './communication/astronaut.component';

import { ParentComponent } from './input/parent.component';
import { ChildComponent } from './input/child.component';
import { Parent2Component } from './input/parent2.component';
import { Child2Component } from './input/child2.component';


import { RouterModule, Routes, } from '@angular/router';
import { UpdateComponent } from './routecomm/update.component';
import { HistoryComponent } from './routecomm/history.component';
import { RouteComponent } from './routecomm/route.component';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { CommService } from './routecomm/comm.service';

const routes: Routes = [
  { path: '', redirectTo: '/update', pathMatch: 'full' },
  { path: 'update', component: UpdateComponent },
  { path: 'history', component: HistoryComponent},
  { path: 'history/:productID', component: HistoryComponent},
];

@NgModule({
  imports:      [ BrowserModule,  FormsModule, PaginationModule.forRoot(), Ng2TableModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, TableDemoComponent, MissionControlComponent, AstronautComponent, 
  RouteComponent, UpdateComponent, HistoryComponent,
  ParentComponent, ChildComponent, Parent2Component, Child2Component  ],
  bootstrap:    [ AppComponent ],
  providers: [  { provide: APP_BASE_HREF, useValue: '/' }, { provide: LocationStrategy, useClass: HashLocationStrategy }, CommService]
})
export class AppModule { 
  
}

													
