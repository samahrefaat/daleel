import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardTeacherComponent } from './dashboard-teacher/dashboard-teacher.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../shared/sharedIndex';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardStudentComponent } from './dashboard-students/dashboard-main.component';
import { DashboardDisablityStudentComponent } from './dashboard-disablity-students/dashboard-disablity-students.component';
import { DashboardTeachersComponent } from './dashboard-teachers/dashboard-teachers.component';
import { DashboardMain2Component } from './dashboard-main-2/dashboard-main-2.component';
import { DashboardMComponent } from './dashboard/dashboard.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMainComponent,
    DashboardTeacherComponent,
    DashboardStudentComponent,
    DashboardDisablityStudentComponent,
    DashboardTeachersComponent,
    DashboardMain2Component,
    DashboardMComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    CarouselModule,
    CalendarModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      imageWidth: 80,
      imageHeight: 80,
    }),
    SharedModule,
    TranslateModule,
  ],
})
export class DashboardModule {}
