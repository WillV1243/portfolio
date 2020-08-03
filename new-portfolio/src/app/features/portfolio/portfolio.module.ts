import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { CoreModule } from '../../core/core.module'
import { SharedModule } from '../../shared/shared.module';

// pages
import { LandingComponent } from './pages';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class PortfolioModule { }
