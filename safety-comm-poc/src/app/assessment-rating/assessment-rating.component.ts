import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { WindowService } from '../window-service';
import { AssessmentRating } from '../assessment-rating/assessment-rating.model';
@Component({
  selector: 'app-assessment-rating',
  templateUrl: './assessment-rating.component.html',
  styleUrls: ['./assessment-rating.component.css']
})
export class AssessmentRatingComponent implements OnInit {
  @Input() assessmentRating: AssessmentRating;
  @Input() assessmentRatingsFormArray: FormArray;
  @Input() assessmentIndex: number;

  assessmentRatingFormGroup: FormGroup;

  constructor(private windowService: WindowService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.assessmentRatingFormGroup = this.formBuilder.group({
      assessmentRatingId: this.assessmentRating.assessmentRatingId,
      assessmentRating: this.assessmentRating.assessmentRating,
      assessmentRatingComment: this.assessmentRating.assessmentRatingComment
    });
    this.assessmentRatingsFormArray.push(this.assessmentRatingFormGroup);
    
    this.assessmentRatingFormGroup.addControl('actions', new FormArray([]));

  }

  openAccordion(): boolean {
    return this.windowService.nativeWindow.innerWidth > 768;
  }

}
