import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDetailComponent } from './action-detail.component';

describe('ActionDetailComponent', () => {
  let component: ActionDetailComponent;
  let fixture: ComponentFixture<ActionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
