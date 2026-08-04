import { Component, OnInit, signal } from '@angular/core';
import { ShopService } from './shop-servic';
import { Ipagination } from '../shared/Models/pagnation';
import { IProduct } from '../shared/Models/Product';
import { ICategory } from '../shared/Models/Category';

@Component({
  selector: 'app-shop-component',
  standalone: false,
  templateUrl: './shop-component.html',
  styleUrl: './shop-component.scss',
})
export class ShopComponent implements OnInit {

        ngOnInit(): void {
      this.getAllProducts(); 
      this.getAllCategories();
      }

        constructor(private shopService: ShopService) {}

        // get products
       products = signal<IProduct[]>([]);
        getAllProducts() {
          this.shopService.getproducts(this.CategoryId).subscribe({
            next:((value: Ipagination) => {
              this.products.set(value.data);
            })
          
        });
      }


      //get categories
      categories = signal<ICategory[]>([]);
      CategoryId : number ;
        getAllCategories() {
          this.shopService.getcategories().subscribe({
            next:((value: ICategory[]) => {
              this.categories.set(value);
            })
          
        });
      }
      SelectedId(categoryId: number) {
        this.CategoryId = categoryId;
        this.getAllProducts();
      }

}
