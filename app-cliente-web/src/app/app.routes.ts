import { Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { authGuard } from './share/services/auth.guard.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'onboarding',
        loadComponent: () => import('./onboarding/onboarding.component').then(m => m.OnboardingComponent)
    },
    {
        path: 'inicio',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'productos',
        loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)
    },
    {
        path: 'tiendas',
        loadComponent: () => import('./markets/markets.component').then(m => m.MarketsComponent)
    },
    {
        path: 'lista-de-deseos',
        loadComponent: () => import('./wishlist/wishlist.component').then(m => m.WishlistComponent),
        canActivate: [authGuard],
    },
    {
        path: 'publicaciones',
        loadComponent: () => import('./posts/posts.component').then(m => m.PostsComponent)
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent)
    },
];
