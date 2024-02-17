import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardMComponent } from './dashboard.component';

describe('DashboardMComponent', () => {
  let component: DashboardMComponent;
  let fixture: ComponentFixture<DashboardMComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
