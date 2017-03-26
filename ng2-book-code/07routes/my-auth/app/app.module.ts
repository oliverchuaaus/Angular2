import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


/*
 * Components
 */
import { HomeComponent } from './components/HomeComponent';
import { AboutComponent } from './components/AboutComponent';
import { ContactComponent } from './components/ContactComponent';
import { ProtectedComponent } from './components/ProtectedComponent';
import { LoginComponent } from './components/LoginComponent';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AUTH_PROVIDERS} from './services/AuthService';
import {LoggedInGuard} from './guards/loggedIn.guard';

import {
  RouterModule,
  Router,
  Routes
} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
  { path: 'protected', component: ProtectedComponent,
 canActivate: [LoggedInGuard]}
];

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(routes) // <-- routes 
  ],
  declarations: [AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProtectedComponent,
    LoginComponent,
],
  bootstrap: [AppComponent],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }