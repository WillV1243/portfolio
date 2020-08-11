// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { TitleComponent } from './title/title.component';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent
  ]
})
export class ComponentLibModule { }
