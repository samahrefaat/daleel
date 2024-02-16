import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardStudentComponent } from './dashboard-students/dashboard-main.component';
import { DashboardDisablityStudentComponent } from './dashboard-disablity-students/dashboard-disablity-students.component';
import { DashboardTeachersComponent } from './dashboard-teachers/dashboard-teachers.component';
import { DashboardMain2Component } from './dashboard-main-2/dashboard-main-2.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'main', component: DashboardMainComponent },
      { path: 'teachers', component: DashboardTeachersComponent },
      { path: 'student', component: DashboardStudentComponent },
      {
        path: 'disablity-student',
        component: DashboardDisablityStudentComponent,
      },
      {
        path: 'main-2',
        component: DashboardMain2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
