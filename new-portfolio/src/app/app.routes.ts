// angular
import { Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './core/pages';
/* --------------------------------------------------------------------------------- */

export const routeConfig: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
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
    ]
  }
];
