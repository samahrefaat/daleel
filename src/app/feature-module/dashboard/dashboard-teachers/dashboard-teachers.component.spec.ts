import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardTeachersComponent } from './dashboard-teachers.component';

describe('DashboardTeachersComponent', () => {
  let component: DashboardTeachersComponent;
  let fixture: ComponentFixture<DashboardTeachersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTeachersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
