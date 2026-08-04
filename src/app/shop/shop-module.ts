import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shop } from './shop';

@NgModule({
  declarations: [Shop],
  imports: [CommonModule],
  exports: [Shop]
})
export class ShopModule {}
