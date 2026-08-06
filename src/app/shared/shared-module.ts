import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagnationComponent } from './Component/pagnation-component/pagnation-component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PagnationComponent],
  imports: [CommonModule, PaginationModule ,RouterModule],
  exports: [PaginationModule , PagnationComponent],
})
export class SharedModule {}
