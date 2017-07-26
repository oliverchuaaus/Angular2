import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Assessment } from '../assessment/assessment.model';
import { WindowService } from '../window-service';
@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  @Input() assessment: Assessment;
  @Input() assessmentsFormArray: FormArray;
  assessmentFormGroup: FormGroup;

  constructor(private windowService: WindowService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.assessmentFormGroup = this.formBuilder.group({
      assessmentId: this.assessment.assessmentId
      
    });
    this.assessmentsFormArray.push(this.assessmentFormGroup);
    this.assessmentFormGroup.addControl('assessmentRatings', new FormArray([]));

  }

  openAccordion(): boolean {
    return this.windowService.nativeWindow.innerWidth > 768;
  }

  getTitle(index: number) {
    return index + 1 + ". " + this.assessment.assessmentDescription;
  }
}
