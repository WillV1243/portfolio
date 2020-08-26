import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { CoreModule } from '../../core/core.module'
import { SharedModule } from '../../shared/shared.module';

// components
import {
  LandingComponent,
  ProjectComponent,
  SkillsComponent,
  AboutComponent,
  TechnologyLinkComponent
} from './components';

// pages
import { PortfolioComponent } from './pages';

// routes
import { routeConfig } from './portfolio.routes';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [
    PortfolioComponent,
    LandingComponent,
    ProjectComponent,
    TechnologyLinkComponent,
    SkillsComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routeConfig)
  ]
})
export class PortfolioModule { }
