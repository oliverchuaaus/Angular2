import { Component, OnInit, Input } from '@angular/core';
import {Employee} from '../employee/employee.model';
import {EmployeeAssessment} from '../employee-assessment/employee-assessment.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() employeeAssessment: EmployeeAssessment;

  constructor() { }

  ngOnInit() {
  }

}
