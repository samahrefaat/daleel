import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  UntypedFormGroup,
  UntypedFormControl,
  FormControl
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import { Subscription, takeWhile, tap, timer } from 'rxjs';
import { IRegistrationWay, SourceGatwayOTP } from './registration-way';
import Validation from './validation';
import { RegistrationEnum } from './registration-ways.enum';
import { RegisterationService } from './registeration.service';
import { ToastService } from 'src/app/shared/toast/toast/toast.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StepperComponent implements OnInit{
  registrationWayFormGrp: FormGroup ;
  isBtnLoading: boolean = false;
  timeLeft = 60;
  phoneNumber = new FormControl('', [Validators.pattern('(05)[0-9]{8}')]);

  avatarError: string | undefined
  CountryISO = CountryISO;
  currentYear: any;
  type = 'eamil';
  email: string = '';
  emailError: string = '';
  emailInvalid: boolean = false;
  code: string[] = ['', '', '', '', '', '']; // Array to store code
  isCodeEntered: boolean = false; // Property to determine 
  mobile: any;
  mobileError: string = '';
  mobileInvalid: boolean = false;
  emailValue: string = '';
  currentLang: string;
  SearchCountryField = SearchCountryField;
  public Toggledata = true;
  public CustomControler!: string | number;
  imageUrl: any;
  useruploodimage: boolean = false;
  deleteicon: boolean = true;
  file:any
  // account: IRegistrationWay = {
  //   accountWay:'' ,
    
  //   notificationSource:'',
  //   soursGetway:SourceGatwayOTP.ICA
  // };
  account: IRegistrationWay = {
    accountWay:'',
    notificationSource:'',
    soursGetway:SourceGatwayOTP.ICA
  };
  UAEUnregisteredUser: { phone: any; } | undefined;
  step: number = 1;
  enableSendOtpAgain: boolean = true;
  interval: any;

  excludedLast3Digits:any
  params:any
  
  currentRegistrationWay: any
  passwordsFormGrp: FormGroup;
  accountFormGrp: FormGroup;
  signUpWaysList: any;
  showUserDetails = false;
  showPhoneField: boolean = false;
  showIdentityField: boolean = false;
  showEmailField: boolean = false;
  form = new UntypedFormGroup({
    email: new UntypedFormControl('', []),
    // password_confirmation: new UntypedFormControl('123456', [
    //   Validators.required,
    // ]),
    // password: new UntypedFormControl('123456', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    public translate: TranslateService,
    private renderer: Renderer2,
    private authService: RegisterationService,
    private toastService: ToastService,


  ) {
    this.registrationWayFormGrp = formBuilder.group({
      registrationWay: ['', Validators.required],
      phoneWay: [''],
      emairatesWay: [null],
      emailWay: [''],
    });
    this.passwordsFormGrp = formBuilder.group(
      {
        newUserPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=\\D*\\d)(?=.*?[#?!@$%^&*-])(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'
            ),
          ],
        ],
        newUserConfirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=\\D*\\d)(?=.*?[#?!@$%^&*-])(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'
            ),
          ],
        ],
      },
      {
        validators: [
          Validation.match('newUserPassword', 'newUserConfirmPassword'),
        ],
      }
    );
    this.accountFormGrp = formBuilder.group({
      arabicName: ['', [Validators.required, Validators.maxLength(100)]],
      englishName: ['', [Validators.required, Validators.maxLength(100)]],
      arabicNickName: ['', [Validators.required, Validators.maxLength(100)]],
      englishNickName: ['', [Validators.required, Validators.maxLength(100)]],
      nationality: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      identityReasonId: ['', [Validators.required]],
      identityReasonFile: ['', [Validators.required]],
    });
    this.type = 'email';
    this.currentYear = new Date().getFullYear();

    this.form = this.formBuilder.group({
      phone: ['', Validators.required],
    });
    this.currentLang = this.translate.currentLang;

    this.changeLang('ar');
  }
  ngOnInit(): void {
    this.getRegistrationWays()
    this.RemoveStorage();
  }
  getRegistrationWays(){
    this.signUpWaysList = [
      {
        value: RegistrationEnum.Email,
        name: this.translate.instant('sign up.emailInCaseNotHaveEmiratesID'),
      },
      {
        value: RegistrationEnum.PhoneNumber,
        name: this.translate.instant('sign up.phoneNumberInCaseNotHaveEmiratesID'),
      },
      {
        value: RegistrationEnum.EmiratesId,
        name: this.translate.instant('sign up.digitalIdentity'),
      },
    ];
  }
  RemoveStorage() {
    localStorage.removeItem('accountWay');
    localStorage.removeItem('notificationSource');
    localStorage.removeItem('userAcountData');
  }

  iconLogle() {
    this.Toggledata = !this.Toggledata;
  }
  handleCardChange(val: string) {
    this.type = val;
  }
  changeLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    if (lang == 'en') {
      this.renderer.addClass(document.body, 'ltr');
    }
  }
  validateEmail(e: any) {
    this.emailValue = e.target.value;
    if (!e.target.value) {
      this.emailError = 'حقل إلزامي ';
    } else {
      // Regular expression for email validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // Check if the email matches the regex pattern
      this.emailInvalid = !emailRegex.test(e.target.value);
      if (this.emailInvalid) {
        this.emailError = 'لابد أن يكون مطابق لمواصفات البريد الإلكتروني ';
      }
    }
  }

  validateMobile(e: any) {
    console.log(e.target.value, 'eeee');

    if (!e.target.value) {
      this.mobileError = 'حقل إلزامي ';
    } else {
      const mobileRegex = /^05\d{8}$/;
      // Check if the mobile number matches the regex pattern

      this.mobileInvalid = !mobileRegex.test(e.target.value);
      if (this.mobileInvalid) {
        this.mobileError =
          'Mobile must start with 05 and contain 10 numbers only';
      } else {
        this.mobileError = '  ';
      }
    }
  }
  checkCodeFilled(): void {
    this.isCodeEntered = this.code.every(val => val !== '');
  }
  uploadAvatar(event: { target: { files: any; }; }) {
   
    const files = event.target.files;
    if (files.length === 0) return;
    if (
      !(
        files[0].type === 'image/jpeg' ||
        files[0].type === 'image/png' ||
        files[0].type === 'image/svg+xml' ||
        files[0].type === 'image/svg'
      )
    ) {
      this.avatarError = 'VALIDATION.IMAGETYPE_VALIDATION';
      return;
    }
    if (files[0].size / 1024 / 1024 > 3) {
      this.avatarError = 'VALIDATION.IMAGE_SIZE_VALIDATION';
      return;
    }

    
  }
  uploadFile(event: any) {
    this.useruploodimage = true;
    this.deleteicon = false;

    let reader = new FileReader();
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.imageUrl = reader.result?.toString();
            this.file = file

            // this.formData.append('image', file);
        };
    }
}

get registrationWay() {
  return this.registrationWayFormGrp.controls[
    'registrationWay'
  ] as FormControl;
}
get phoneWay() {
  return this.registrationWayFormGrp.controls['phoneWay'] as FormControl;
}

get emairatesWay() {
  return this.registrationWayFormGrp.controls['emairatesWay'] as FormControl;
}
get emailWay() {
  return this.registrationWayFormGrp.controls['emailWay'] as FormControl;
}
get newUserPassword() {
  return this.passwordsFormGrp.controls['newUserPassword'] as FormControl;
}
get newUserConfirmPassword() {
  return this.passwordsFormGrp.controls[
    'newUserConfirmPassword'
  ] as FormControl;
}

get arabicName() {
  return this.accountFormGrp.controls['arabicName'] as FormControl;
}
get englishName() {
  return this.accountFormGrp.controls['englishName'] as FormControl;
}

get arabicNickName() {
  return this.accountFormGrp.controls['arabicNickName'] as FormControl;
}
get englishNickName() {
  return this.accountFormGrp.controls['englishNickName'] as FormControl;
}

get nationality() {
  return this.accountFormGrp.controls['nationality'] as FormControl;
}
get birthDay() {
  return this.accountFormGrp.controls['birthDay'] as FormControl;
}

get gender() {
  return this.accountFormGrp.controls['gender'] as FormControl;
}
get identityReasonFile() {
  return this.accountFormGrp.controls['identityReasonFile'] as FormControl;
}
get identityReasonId() {
  return this.accountFormGrp.controls['identityReasonId'] as FormControl;
}
changeRegistrationField(e: RegistrationEnum) {
  if (e == RegistrationEnum.PhoneNumber) {
    this.showEmailField = false;
    this.showPhoneField = true;
    this.showIdentityField = false;
    this.emairatesWay.clearValidators();
    this.emairatesWay.updateValueAndValidity();
    this.emailWay.clearValidators();
    this.emailWay.updateValueAndValidity();
    this.phoneWay.setValidators([ Validators.required, Validators.pattern('(05)[0-9]{8}'),]);
    this.account.notificationSource =this.registrationWayFormGrp.value.phoneWay;

  } else if (e == RegistrationEnum.Email) {
    this.showEmailField = true;
    this.showPhoneField = false;
    this.showIdentityField = false;
    this.emairatesWay.clearValidators();
    this.emairatesWay.updateValueAndValidity();
    this.phoneWay.clearValidators();
    this.phoneWay.updateValueAndValidity();
    this.emailWay.setValidators([
      Validators.required,
      Validators.pattern(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    ]);
    this.account.notificationSource = this.registrationWayFormGrp.value.emailWay;
  } else if (e == RegistrationEnum.EmiratesId) {
    this.showEmailField = false;
    this.showPhoneField = false;
    this.showIdentityField = true;
    this.phoneWay.clearValidators();
    this.phoneWay.updateValueAndValidity();
    this.emailWay.clearValidators();
    this.emailWay.updateValueAndValidity();
    this.emairatesWay.setValidators([ Validators.required, Validators.pattern('(784)[0-9]{12}'),]);

    this.account.notificationSource =this.registrationWayFormGrp.value.emairatesWay;
  }
}
saveRegistrationWay() {
  this.account.accountWay = this.registrationWayFormGrp.value.registrationWay;
  this.currentRegistrationWay = this.registrationWayFormGrp.value.registrationWay;
  this.changeRegistrationField(this.registrationWayFormGrp.value.registrationWay);

  localStorage.setItem('accountWay', this.account.accountWay);
  localStorage.setItem('notificationSource', this.account.notificationSource);
  // this.openOTPModel=true;

  if (this.account.accountWay == RegistrationEnum.EmiratesId) this.createUaePassAccount()
  else this.sendOTP();

}
sendOTP() {
  if (this.timeLeft) {
    this.isBtnLoading = true;
  }

  let data

  if(this.currentRegistrationWay == RegistrationEnum.EmiratesId){

    data={
      ...this.account,
      soursGetway : SourceGatwayOTP.ICA,
      phoneHashed:this.UAEUnregisteredUser?.phone
    }
  }else{
    data={
      ...this.account,
      soursGetway :  SourceGatwayOTP.Registration,
    }
  }

  this.authService.sendOtpToUser(data).subscribe(
    (res) => {
      this.isBtnLoading = false;
      this.toastService.success(this.translate.instant('shared.Otp send successfully'));

      this.step = 2;
      this.startTimer();
      this.enableSendOtpAgain = true;
    },
    (err: Error) => {
      this.isBtnLoading = false;
      this.toastService.error(err.message ||this.translate.instant('AnnualHoliday.error,please try again'));
    }
  );

}
startTimer() {
  this.timeLeft = 60;
  timer(1000, 1000) //Initial delay 1 seconds and interval countdown also 1 second
    .pipe(
      takeWhile(() => this.timeLeft > 0),
      tap(() => this.timeLeft--)
    )
    .subscribe(() => {});
}

createUaePassAccount(){
  this.authService
      .createUAEPassAccount(this.account.notificationSource)
      .subscribe(
        (res:any) => {

          this.isBtnLoading = false;
          // (res?.statusCode == 'BadGateway' && res?.result)
          if (res?.statusCode == 'OK' || (res?.statusCode == 'BadGateway' && res?.result)) {
            if(res && (!res?.result?.phone || !res?.result?.phoneLast3Digit)){
              this.toastService.error('.عذرا لا يمكن استكمال خطوات التسجيل حيث انه لايوحد رقم هاتف مرمبوط بالهوية')
              return
            }
            this.step = 5;
            this.UAEUnregisteredUser = res?.result;
            // this.excludedLast3Digits = res?.result?.phone.slice(-3);
            // this.phoneNumber.setValue(this.excludedLast3Digits.padStart(10,'*'))
            // this.params= {value: this.excludedLast3Digits}
            this.phoneNumber.setValue( res?.result?.phoneLast3Digit?.padStart(10,'*'))
            this.params= {value: res?.result?.phoneLast3Digit}

          } else if(res?.statusCode == 'BadGateway' && !res?.result){
              this.toastService.error(this.translate.instant('toasterMessage.techError'));

          }else if (res?.statusCode == 'NotAcceptable') {
            this.toastService.error(this.translate.instant('EmiratesIdIsNotValid'));
          } else if (res?.statusCode == 'BadRequest') {
            this.toastService.error(
              this.translate.instant('AnnualHoliday.error,please try again'));
          }
        },
        (err) => {
          this.isBtnLoading = false;
          this.toastService.error(this.translate.instant('AnnualHoliday.error,please try again'));
        }
      );
}
sendOtpAgain() {
  this.enableSendOtpAgain = false;
  this.setCurrentRegistrationWay();
  this.sendOTP();
}
setCurrentRegistrationWay() {
 
  this.account.accountWay = localStorage.getItem('accountWay') || ''; // Providing a default empty string if getItem returns null
  this.account.notificationSource = localStorage.getItem('notificationSource')  || ''
}
}
