import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'login', component: LoginComponent},
    {path:'products', component: ProductsComponent},
    {path:'product-details', component: ProductDetailsComponent},
    {path: '**', component: PageNotFoundComponent}
];
