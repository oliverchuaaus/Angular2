import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { TabsModule, AccordionModule, DatepickerModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { EmployeeAssessmentComponent } from './employee-assessment/employee-assessment.component';
import { EmployeeComponent } from './employee/employee.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentRatingComponent } from './assessment-rating/assessment-rating.component';
import { ManagerEvaluationComponent } from './manager-evaluation/manager-evaluation.component';
import { ActionComponent } from './action/action.component';
import { ActionDetailComponent } from './action-detail/action-detail.component';

import { EmployeeAssessmentService } from './employee-assessment/employee-assessment-service';
import { WindowService } from './window-service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeAssessmentComponent,
    EmployeeComponent,
    AssessmentComponent,
    AssessmentRatingComponent,
    ActionComponent,
    ActionDetailComponent,
    ManagerEvaluationComponent,
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule,
    TabsModule.forRoot(), AccordionModule.forRoot(), DatepickerModule.forRoot()
  ],
  providers: [EmployeeAssessmentService, WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
