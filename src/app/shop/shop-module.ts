import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop-component';
import { ShopItem } from './shop-item/shop-item';

@NgModule({
  declarations: [ShopComponent, ShopItem],
  imports: [CommonModule],
  exports: [ShopComponent],
})
export class ShopModule {}
