import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ManagerEvaluation } from './manager-evaluation.model';
@Component({
  selector: 'app-manager-evaluation',
  templateUrl: './manager-evaluation.component.html',
  styleUrls: ['./manager-evaluation.component.css']
})
export class ManagerEvaluationComponent implements OnInit {
  @Input()
  private managerEvaluation: ManagerEvaluation;
  @Input()
  assessmentFormGroup: FormGroup;
  managerEvaluationFormGroup: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.managerEvaluationFormGroup = this.formBuilder.group({
      managerName: this.managerEvaluation.managerName,
      evaluationDate: this.managerEvaluation.evaluationDate,
      additionalComments: this.managerEvaluation.additionalComments,
      goals: this.managerEvaluation.goals
    })
    this.assessmentFormGroup.addControl("managerEvaluationFormGroup", this.managerEvaluationFormGroup);

    console.log(this.managerEvaluation.managerName);
  }

}
