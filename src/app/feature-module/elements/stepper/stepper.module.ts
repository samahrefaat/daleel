import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormWizardRoutingModule } from './stepper-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepperComponent } from './stepper.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    FormWizardRoutingModule,
    SharedModule,
    NgxIntlTelInputModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class StepperModule {}
