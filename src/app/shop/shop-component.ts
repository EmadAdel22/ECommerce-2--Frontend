import { Component, ElementRef, OnInit, signal } from '@angular/core';
import { ShopService } from './shop-servic';
import { Ipagination } from '../shared/Models/pagnation';
import { IProduct } from '../shared/Models/Product';
import { ICategory } from '../shared/Models/Category';
import { ViewChild } from '@angular/core';
import { ProductParams } from '../shared/Models/producParams';



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

        ProductParams = new ProductParams();
        TotatlCount : number 
        // get products
       products = signal<IProduct[]>([]);
        getAllProducts() {
          this.shopService.getproducts(this.ProductParams).subscribe({
            next:((value: Ipagination) => {
              this.products.set(value.data);
              this.TotatlCount = value.totalCount;
              this.ProductParams.PageNumbre = value.pageNumber;
              this.ProductParams.PageSize = value.pageSize;
            })
          
        });
      }


      //get categories
      categories = signal<ICategory[]>([]);
        getAllCategories() {
          this.shopService.getcategories().subscribe({
            next:((value: ICategory[]) => {
              this.categories.set(value);
            })
          
        });
      }
      SelectedId(categoryId: number) {
        this.ProductParams.CategoryId = categoryId;
        this.getAllProducts();
      }

      // sorting by price

      SortingOption = [
        { name: 'Price', value: 'Name' },
        { name: 'Price: min to max', value: 'PriceAC' },
        { name: 'Price: max to min', value: 'PriceDes' }
      ]

      SortingByPrice(sort : Event){
        this.ProductParams.sortSelected = (sort.target as HTMLInputElement).value;
        this.getAllProducts();

      }

      // search by word

      OnSearch(Search:string ){
        this.ProductParams.search = Search;
        this.getAllProducts();  
      }

  // reset value of search and sort
@ViewChild('search')searchInput: ElementRef;

@ViewChild('SortSelected') SortSelected: ElementRef;
  ResetValue(){
    this.searchInput.nativeElement.value = '';
    this.SortSelected.nativeElement.selectedIndex = 0;
    this.getAllProducts();
  }

  // pagination
  OnChangePage(event:any){
    this.ProductParams.PageNumbre = event;
    this.getAllProducts();
  }
}
