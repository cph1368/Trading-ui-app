import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'invest',
        loadComponent: () =>
          import('../features/invest/pages/invest.page').then((m) => m.InvestPage),
      },
      {
        path: 'discover',
        loadComponent: () =>
          import('../features/discover/discover.page').then((m) => m.DiscoverPage),
      },
      {
        path: '',
        redirectTo: '/tabs/invest',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/invest',
    pathMatch: 'full',
  },
];
