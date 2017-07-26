import {Employee} from '../employee/employee.model';
import {Assessment} from '../assessment/assessment.model';

export class EmployeeAssessment{
    employee: Employee;
    assessmentIdNumber: string
    dateAssessmentRequested: Date;
    dateAssessmentCompleted: Date;
    requesterName:string;
    assessments: Array<Assessment>;
}