import { NgModule,  } from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { RouterModule, Routes,  } from '@angular/router';
import {AuthService, LoggedInGuard} from './auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouteComponent, HomeComponent, DetailComponent, AboutComponent } from './route.component';
import { AuthComponent, RestrictedComponent, LoginComponent } from './auth.component';
import { NestedComponent, } from './nested.component';
import { childRoutes, ProductComponent, MainProductComponent, SearchProductComponent, MaintainProductComponent, DetailProductComponent} from './product.component';

import {} from './au';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'restricted', component: RestrictedComponent, canActivate: [LoggedInGuard]},
    { path: 'about', component: AboutComponent },
    { path: 'product', component: ProductComponent, children: childRoutes },

];


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent, RouteComponent, HomeComponent, DetailComponent, AboutComponent, 
    AuthComponent, RestrictedComponent, LoginComponent, 
    NestedComponent, ProductComponent, MainProductComponent, SearchProductComponent, MaintainProductComponent, DetailProductComponent],
    bootstrap: [AppComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AuthService, LoggedInGuard]
})
export class AppModule {



}