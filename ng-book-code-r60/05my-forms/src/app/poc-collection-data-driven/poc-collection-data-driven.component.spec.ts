import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocCollectionDataDrivenComponent } from './poc-collection-data-driven.component';

describe('PocCollectionDataDrivenComponent', () => {
  let component: PocCollectionDataDrivenComponent;
  let fixture: ComponentFixture<PocCollectionDataDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocCollectionDataDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocCollectionDataDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
