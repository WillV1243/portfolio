// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { TitleComponent, NavbarComponent } from './components';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [
    TitleComponent,
    NavbarComponent,
    ParagraphComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    NavbarComponent
  ]
})
export class ComponentLibModule { }
