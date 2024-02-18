import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.newserverUrl;
const schoolStatics =
  baseUrl + '/SchoolDashboard/GetSchoolByAddressOrCurriculum';
const SchoolDashboard =
  baseUrl + '/SchoolDashboard/GetSchoolDashboardStatistic';
const GetCurriculmsFilters = baseUrl + '/Curriculum/GetCurriculms';
const GetStatesFilters = baseUrl + '/Address/GetStates';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    private router: Router
  ) {}

  getSchoolStatics(filters: any): Observable<any> {
    return this.http.post<any>(schoolStatics, { ...filters });
  }
  getSchoolDashboardStatistic(filters: any): Observable<any> {
    return this.http.post<any>(SchoolDashboard, { ...filters });
  }
  getCurriculmsFilters(): Observable<any> {
    return this.http.get<any>(GetCurriculmsFilters);
  }
  getStatesFilters(): Observable<any> {
    return this.http.get<any>(GetStatesFilters);
  }
}
