import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
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
    loadComponent: () => import('./wishlist/wishlist.page').then( m => m.WishlistPage)
  },
  {
    path: 'markets',
    loadComponent: () => import('./markets/markets.page').then( m => m.MarketsPage)
  },
];
