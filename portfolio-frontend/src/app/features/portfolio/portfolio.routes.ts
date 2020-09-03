// angular
import { Routes } from '@angular/router';

// pages
import { PortfolioComponent } from './pages';
/* --------------------------------------------------------------------------------- */

export const routeConfig: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: 'projects',
    loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];
