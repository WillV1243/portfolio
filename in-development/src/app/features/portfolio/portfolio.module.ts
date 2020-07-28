// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module'

// pages
import { PortfolioComponent } from './pages';

// components
import { HeroLinksComponent, TiltContainerComponent } from './components';

// layout
import { NavbarComponent } from './layout';

// routes
import { routeConfig } from './portfolio.routes';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [
    PortfolioComponent,
    HeroLinksComponent,
    NavbarComponent,
    TiltContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeConfig),
    CoreModule,
    SharedModule
  ]
})
export class PortfolioModule { }
