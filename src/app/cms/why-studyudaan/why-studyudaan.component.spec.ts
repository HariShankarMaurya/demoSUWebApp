import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyStudyudaanComponent } from './why-studyudaan.component';

describe('WhyStudyudaanComponent', () => {
  let component: WhyStudyudaanComponent;
  let fixture: ComponentFixture<WhyStudyudaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyStudyudaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyStudyudaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
