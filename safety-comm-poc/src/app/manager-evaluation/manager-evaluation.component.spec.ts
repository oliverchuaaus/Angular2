import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerEvaluationComponent } from './manager-evaluation.component';

describe('ManagerEvaluationComponent', () => {
  let component: ManagerEvaluationComponent;
  let fixture: ComponentFixture<ManagerEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
