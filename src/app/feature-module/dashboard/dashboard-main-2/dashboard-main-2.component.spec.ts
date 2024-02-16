import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardMain2Component } from './dashboard-main-2.component';

describe('DashboardMain2Component', () => {
  let component: DashboardMain2Component;
  let fixture: ComponentFixture<DashboardMain2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMain2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
