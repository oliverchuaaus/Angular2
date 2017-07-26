import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAssessmentComponent } from './employee-assessment.component';

describe('EmployeeAssessmentComponent', () => {
  let component: EmployeeAssessmentComponent;
  let fixture: ComponentFixture<EmployeeAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
