import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, catchError, take } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl = environment.serverUrl;
const loginUrl = baseUrl + '/User/Auth/Login';
const forgetPassword = baseUrl + '/User/ForgotPassword'
const signWithUaePass = baseUrl + '/Account/UAEPASS?language='



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient,
    private translate :TranslateService,
    private router: Router) { }
    login(loginData: any): Observable<any> {
      
        return this.http.post<any>(loginUrl, loginData);
     
    }
 
  forgotPassword(account: any) {
    return this.http.post(forgetPassword, account).pipe(
      catchError((err) => {
        let message =  err?.En;
        throw new Error(message);
      })
    );
  }
    
  signInWithIdentity(lang: any) {
    return this.http.get(`${signWithUaePass}${lang}`);
  }

}
