// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// features
import { ComponentLibModule } from '../features/component-lib/component-lib.module';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentLibModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ComponentLibModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
