// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ComponentLibModule } from '../features/component-lib/component-lib.module';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentLibModule
  ],
  exports: [
    ComponentLibModule
  ]
})
export class SharedModule { }
