import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrackOrderComponent } from './user-track-order.component';

describe('UserTrackOrderComponent', () => {
  let component: UserTrackOrderComponent;
  let fixture: ComponentFixture<UserTrackOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTrackOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrackOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
