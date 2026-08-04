import { Component, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './shared/Models/Product';
import { Ipagination } from './shared/Models/pagnation';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss']
})
export class App implements OnInit {

  // BaseUrl = 'https://localhost:7238/api/Categories/get-all';

  // // Signal بدل any
  // Category = signal<any[]>([]);

  // constructor(private http: HttpClient) {}

  // getCategories() {
  //   this.http.get<any[]>(this.BaseUrl).subscribe({
  //     next: (value) => {
  //       this.Category.set(value);
  //       console.log(value);
  //     }
  //   });
  // }

  // ngOnInit(): void {
  //   this.getCategories();
  // }

  
  BaseUrl = 'https://localhost:7238/api/Products/get-all';

  // Signal بدل any
 products = signal<IProduct[]>([]);

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http.get<Ipagination>(this.BaseUrl).subscribe({
      next: (value : Ipagination) => {
        this.products.set(value.data);
        console.log(value.data);
      }
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

}