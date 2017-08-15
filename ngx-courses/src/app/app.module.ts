import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { ServicesComponent } from './services/services.component';

import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { LoginService, LoggedInGuard } from './login/login.service';
import { NewsService } from './news/news.service';
import { CourseService } from './course.service';
import { CourseComponent } from './course/course.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'student', component: StudentComponent, pathMatch: 'full', canActivate: [LoggedInGuard] },
  { path: 'student-registration', component: StudentRegistrationComponent, pathMatch: 'full', canActivate: [LoggedInGuard] },
  { path: 'teacher', component: TeacherComponent, pathMatch: 'full', canActivate: [LoggedInGuard] },
  { path: 'admin', component: AdminComponent, pathMatch: 'full', canActivate: [LoggedInGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    AdminComponent,
    ContactComponent,
    NewsComponent,
    WelcomeComponent,
    LogoutComponent,
    ServicesComponent,
    PricingComponent,
    FaqComponent,
    AboutComponent,
    HomeComponent,
    StudentRegistrationComponent,
    CourseComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpModule, FormsModule, ReactiveFormsModule,
    CollapseModule.forRoot()
  ],
  providers: [LoginService, LoggedInGuard, NewsService, CourseService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
