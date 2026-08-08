import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop-component';
import { HomeComponent } from './home-component/home-component';
import { ProductDetailsComponent } from './shop/product-details/product-details';

const routes: Routes = [

  {path: '', component:HomeComponent},
  

  {path: 'shop', loadChildren:() => import('./shop/shop-routing-module')
    .then(m => m.ShopRoutingModule)},


  {path: '**', redirectTo: '', pathMatch: 'full'},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
