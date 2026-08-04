import { Component , OnInit } from '@angular/core';
import { ShopsService } from './shops';
import { IProduct } from '../shared/Models/Product';
import { Ipagination } from '../shared/Models/pagnation';
import { signal } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop implements OnInit {

  constructor(private shopsService: ShopsService) {}
  ngOnInit(): void {
    this.getAllProducts();
  }

products = signal<IProduct[]>([]);
SortingOption ;
  getAllProducts() {
    this.shopsService.getProducts().subscribe({
      next: ((value :Ipagination) => {
        this.products.set(value.data);
      })
    })
  }

  SortingByPrice(event: any) {}

}
