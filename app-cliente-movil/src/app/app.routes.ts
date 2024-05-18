import { Routes } from '@angular/router';
import { authGuard } from './shared/services/auth.guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('src/app/products/products.page').then((m) => m.ProductsPage),
  },
  {
    path: 'posts',
    loadComponent: () => import('./posts/posts.page').then((m) => m.PostsPage),
  },
  {
    path: 'markets',
    loadComponent: () =>
      import('./markets/markets.page').then((m) => m.MarketsPage), 
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./wishlist/wishlist.page').then( m => m.WishlistPage),
    canActivate: [authGuard]
  },
  {
    path: 'markets',
    loadComponent: () => import('./markets/markets.page').then( m => m.MarketsPage)
  },
];
