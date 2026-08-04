import { Component, OnInit, signal } from '@angular/core';
import { ShopService } from './shop-servic';
import { Ipagination } from '../shared/Models/pagnation';
import { IProduct } from '../shared/Models/Product';

@Component({
  selector: 'app-shop-component',
  standalone: false,
  templateUrl: './shop-component.html',
  styleUrl: './shop-component.scss',
})
export class ShopComponent implements OnInit {

  ngOnInit(): void {
this.getAllProducts(); 
 }

  products = signal<IProduct[]>([]);
  constructor(private shopService: ShopService) {}

  getAllProducts() {
    this.shopService.getproducts().subscribe({
      next:((value: Ipagination) => {
        this.products.set(value.data);
      })
    
  });
}


}
