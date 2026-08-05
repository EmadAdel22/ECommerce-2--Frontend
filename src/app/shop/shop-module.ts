import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop-component';
import { ShopItem } from './shop-item/shop-item';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [ShopComponent, ShopItem],
  imports: [CommonModule,SharedModule],
  exports: [ShopComponent],
})
export class ShopModule {}
