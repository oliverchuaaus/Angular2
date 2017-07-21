import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocCollectionComponent } from './poc-collection.component';

describe('PocCollectionComponent', () => {
  let component: PocCollectionComponent;
  let fixture: ComponentFixture<PocCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
