import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressonChangedComponent } from './expresson-changed.component';

describe('ExpressonChangedComponent', () => {
  let component: ExpressonChangedComponent;
  let fixture: ComponentFixture<ExpressonChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressonChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressonChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
