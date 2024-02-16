import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardDisablityStudentComponent } from './dashboard-disablity-students.component';

describe('DashboardDisablityStudentComponent', () => {
  let component: DashboardDisablityStudentComponent;
  let fixture: ComponentFixture<DashboardDisablityStudentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDisablityStudentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDisablityStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
