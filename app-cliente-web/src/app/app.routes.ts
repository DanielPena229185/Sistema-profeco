import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MarketsComponent } from './markets/markets.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: 'productos',
        component: ProductsComponent
    },
    {
        path: 'tiendas',
        component: MarketsComponent
    },
    {
        path: 'lista-de-deseos',
        component: WishlistComponent
    },
    {
        path: 'publicaciones',
        component: PostsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];
