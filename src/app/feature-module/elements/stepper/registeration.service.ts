import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';
import { getLocalizedValue } from './helpers';
import { HttpStatusCodeEnum } from './http-status-code.enum';
import { environment } from 'src/environments/environment';
const baseUrl = environment.serverUrl;
const sentOtp = baseUrl + '/Account/send-otp';
const createUaePass = baseUrl + '/Account/UAEPASS/registration?IDn=';


@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  constructor(  private http: HttpClient,) { }
  sendOtpToUser(account: any) {
    return this.http.post(sentOtp, account).pipe(
      map((res:any) => {
        if (res?.statusCode != HttpStatusCodeEnum.OK)
          throw new Error(getLocalizedValue(res?.errorLocalized));
        else return res;
      }),
      take(1)
    );
  }
  createUAEPassAccount(account: any) {
    return this.http.post(`${createUaePass}${account}`,{});
  }
}
