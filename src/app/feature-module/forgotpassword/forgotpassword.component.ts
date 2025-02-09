import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { routes } from 'src/app/core/helpers/routes/routes';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { WebStorage } from 'src/app/core/storage/web.storage';
import { ToastService } from 'src/app/shared/toast/toast/toast.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  isBtnLoading: boolean = false;
  public checkAuth: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('authenticated') || 'false'
  );
  currentLang: string | undefined;

  constructor(
    private storage: WebStorage,
    private authService: AuthServiceService,
    private router: Router,
    public translate: TranslateService,

    private toastService: ToastService,
    private renderer: Renderer2,
    

  ) {
    
    this.subscription = this.storage.Loginvalue.subscribe((data) => {
      if (data != '0') {
        this.CustomControler = data;
      }
    });
    this.currentLang = this.translate.currentLang;

    this.changeLang('ar');
  }
  public Toggledata = true;
  public CustomControler!: string | number;
  public subscription: Subscription;
  form = new UntypedFormGroup({
    username: new UntypedFormControl(null, [
      Validators.required,
      Validators.email
    ]),
  });

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.storage.Checkuser();
    this.currentYear = new Date().getFullYear();

    localStorage.removeItem('LoginData');
  }

  submit() {
    this.storage.Login(this.form.value);
    this.authService.login(this.form.value).subscribe((res) => {
      this.router.navigate(['/dashboard/main']);
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }
  showSuccess() {
    this.toastService.success(
      this.translate.instant('login.Login Successfully')
    );
  }
  changeLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    if (lang == 'en') {
      this.renderer.addClass(document.body, 'ltr');
    }
  }
  login(){
    this.router.navigate([routes.login]);
  }
  forgetPassword() {
    this.isBtnLoading = true
    let account;
   

    this.authService.forgotPassword(this.form.value).subscribe(
      (res) => {
     
        this.isBtnLoading = false
        this.toastService.success(this.translate.instant('sign up.confirmed successfully'));
      },
      (err) => {
        this.isBtnLoading = false
        this.toastService.error(err.message ||this.translate.instant('Request cannot be processed, Please contact support.'));
      }
    );
  }

}
