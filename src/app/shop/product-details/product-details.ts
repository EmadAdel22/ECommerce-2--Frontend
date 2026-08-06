import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop-servic';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../shared/Models/Product';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetailsComponent implements OnInit {

constructor(private shopService: ShopService , private route: ActivatedRoute) { }

product: IProduct
loadProduct() {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.shopService.getproductDetails(id).subscribe({
    next: (value: IProduct) => {
      this.product = value;
    }
  });

}

ngOnInit() {
    console.log(this.route);

  this.loadProduct();
}

}
