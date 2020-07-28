// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module'

// routes
import { routeConfig } from './projects.routes';

// pages
import { WorxComponent } from './pages';
/* --------------------------------------------------------------------------------- */

@NgModule({
  declarations: [
    WorxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeConfig),
    CoreModule,
    SharedModule
  ]
})
export class ProjectsModule { }
