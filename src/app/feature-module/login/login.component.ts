import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/core.index';
import { routes } from 'src/app/core/helpers/routes/routes';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { WebStorage } from 'src/app/core/storage/web.storage';
import { ToastService } from 'src/app/shared/toast/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  isBtnLoading: boolean = false;
  public checkAuth: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('authenticated') || 'false'
  );
  currentLang: string | undefined = 'ar';

  constructor(
    private storage: WebStorage,
    private authService: AuthServiceService,
    private router: Router,
    public translate: TranslateService,
    private auth: AuthService,
    private toastService: ToastService,
    private renderer: Renderer2
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
    username: new UntypedFormControl('admin@dreamguys.in', [
      Validators.required,
    ]),
    password: new UntypedFormControl('123456', [Validators.required]),
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
    this.auth.login();
  }
  authenticate() {
    this.isBtnLoading = true;
    this.authService.login(this.form.value).subscribe(
      (res) => {
        this.showSuccess();

        this.isBtnLoading = false;
        this.checkAuth.next('true');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard/main']);
        // this.router.navigateByUrl('/dashboard/main');
      },
      (err: Error) => {
        this.isBtnLoading = false;

        this.toastService.error(
          this.translate.instant('login.Something is wrong,Pleaze login again')
        );
      }
    );
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
  signWithIdentity() {
    this.authService
      .signInWithIdentity(this.currentLang)
      .subscribe((res: any) => {
        window.location.href = res.massege;
      });
  }
}
