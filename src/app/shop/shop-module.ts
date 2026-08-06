import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop-component';
import { ShopItem } from './shop-item/shop-item';
import { SharedModule } from '../shared/shared-module';
import { ProductDetailsComponent } from './product-details/product-details';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShopComponent, ShopItem, ProductDetailsComponent],
  imports: [CommonModule, SharedModule ,RouterModule],
  exports: [ShopComponent],
})
export class ShopModule {}
