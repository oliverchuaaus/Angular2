import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


/*
 * Components
 */
import { HomeComponent } from './components/HomeComponent';
import { AboutComponent } from './components/AboutComponent';
import { ContactComponent } from './components/ContactComponent';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
];

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(routes) // <-- routes 
  ],
  declarations: [AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    //{ provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }