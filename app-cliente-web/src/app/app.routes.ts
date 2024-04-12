import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { StoresComponent } from './stores/stores.component';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
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
        component: StoresComponent
    },
    {
        path: 'lista-de-deseos',
        component: WishlistComponent
    },
    {
        path: 'publicaciones',
        component: PostsComponent
    }
];
