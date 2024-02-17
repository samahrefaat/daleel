import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.newserverUrl;
const schoolStatics =
  baseUrl + '/SchoolDashboard/GetSchoolByAddressOrCurriculum';
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
}
