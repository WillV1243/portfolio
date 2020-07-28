// angular
import { Routes } from '@angular/router';
/* --------------------------------------------------------------------------------- */

export const routeConfig: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/portfolio/portfolio.module').then(m => m.PortfolioModule),
    data: { animation: 'portfolio' }
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];
