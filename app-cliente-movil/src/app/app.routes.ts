import { Routes } from '@angular/router';
import { MainPage } from './main/main.page';

export const routes: Routes = [
 {
    path: '',
    redirectTo: 'main/inicio',
    pathMatch: 'full'
  },
  // {
  //   path: 'tab',
  //   loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  // },
  {
    path: 'main',
    component: MainPage,
    children: [
      {
        path: 'inicio',
        loadComponent: () => import("src/app/inicio/inicio.page").then((p) => p.InicioPage),
      },
      {
        path: 'comparar',
        loadComponent: () => import("src/app/comparar/comparar.page").then((p) => p.CompararPage),
      }
    ]
  }
];
