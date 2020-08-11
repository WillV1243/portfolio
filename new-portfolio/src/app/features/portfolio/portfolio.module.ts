import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { CoreModule } from '../../core/core.module'
import { SharedModule } from '../../shared/shared.module';

// components
import { LandingComponent } from './components';

// pages
import { PortfolioComponent } from './pages';

// layout
import { HeaderComponent, FooterComponent } from './layout';

// routes
import { routeConfig } from './portfolio.routes';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [
    PortfolioComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routeConfig)
  ]
})
export class PortfolioModule { }