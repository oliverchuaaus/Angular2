import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { EmployeeAssessmentService } from './employee-assessment-service';
import { EmployeeAssessment } from '../employee-assessment/employee-assessment.model';
@Component({
  selector: 'app-employee-assessment',
  templateUrl: './employee-assessment.component.html',
  styleUrls: ['./employee-assessment.component.css']
})
export class EmployeeAssessmentComponent implements OnInit {
  employeeAssessment: EmployeeAssessment;
  employeeAssessmentFormGroup: FormGroup;

  constructor(private service: EmployeeAssessmentService, private formBuilder: FormBuilder) {
    this.service.getEmployeeAssessment('').subscribe(data => {
      this.employeeAssessment = data;
      console.log(data);
      this.employeeAssessmentFormGroup = formBuilder.group({});
      this.employeeAssessmentFormGroup.addControl('assessments', new FormArray([]));
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log(form);
  }

}
