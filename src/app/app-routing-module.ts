import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop-component';
import { HomeComponent } from './home-component/home-component';
import { ProductDetailsComponent } from './shop/product-details/product-details';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'product-details/:id',component: ProductDetailsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},

  // {path: 'home', component: HomeComponent},

  // {path: 'products', component: ProductsComponent},
  // {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
