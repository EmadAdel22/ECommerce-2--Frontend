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
          this.shopService.getproducts(this.CategoryId, this.sortSelected).subscribe({
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

      // sorting by price

      SortingOption = [
        { name: 'Price', value: 'Name' },
        { name: 'Price: min to max', value: 'PriceAC' },
        { name: 'Price: max to min', value: 'PriceDes' }
      ]

      sortSelected: string 
      SortingByPrice(sort : Event){
        this.sortSelected = (sort.target as HTMLInputElement).value;
        this.getAllProducts();

      }

}
