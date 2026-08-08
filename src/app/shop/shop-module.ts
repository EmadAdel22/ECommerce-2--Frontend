import { NgModule } from '@angular/core';
import { CommonModule,CurrencyPipe } from '@angular/common';
import { ShopComponent } from './shop-component';
import { ShopItem } from './shop-item/shop-item';
import { SharedModule } from '../shared/shared-module';
import { ProductDetailsComponent } from './product-details/product-details';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing-module';


@NgModule({
  declarations: [ShopComponent, ShopItem, ProductDetailsComponent],
  imports: [CommonModule,ShopRoutingModule, SharedModule ,RouterModule,  CurrencyPipe
],
  exports: [],
})
export class ShopModule {}
