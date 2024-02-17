import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  UntypedFormGroup,
  UntypedFormControl,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StepperComponent {
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
    private renderer: Renderer2
  ) {
    this.type = 'email';
    this.currentYear = new Date().getFullYear();

    this.form = this.formBuilder.group({
      phone: ['', Validators.required],
    });
    this.currentLang = this.translate.currentLang;

    this.changeLang('ar');
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
}
