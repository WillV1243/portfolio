// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

// features
import { ComponentLibModule } from '../features/component-lib/component-lib.module';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentLibModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  exports: [
    ComponentLibModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class SharedModule { }
