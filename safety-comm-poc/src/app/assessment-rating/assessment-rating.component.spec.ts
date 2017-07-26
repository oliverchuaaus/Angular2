import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentRatingComponent } from './assessment-rating.component';

describe('AssessmentRatingComponent', () => {
  let component: AssessmentRatingComponent;
  let fixture: ComponentFixture<AssessmentRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
