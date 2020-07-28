// angular
import { Routes } from '@angular/router';

// pages
import { WorxComponent } from './pages';
/* --------------------------------------------------------------------------------- */

export const routeConfig: Routes = [
  {
    path: 'worx',
    component: WorxComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];
