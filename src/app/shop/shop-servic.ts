import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Ipagination } from '../shared/Models/pagnation';
import { ICategory } from '../shared/Models/Category';
import { ProductParams } from '../shared/Models/producParams';


@Injectable({
  providedIn: 'root',
})
export class ShopService  {

  constructor(private http: HttpClient) { }



  BaseUrl = 'https://localhost:7238/api/';


  getproducts(ProductParams:ProductParams) {
    let param = new HttpParams();
    if (ProductParams.CategoryId) {
      param = param.append('categoryId', ProductParams.CategoryId.toString());
    }
    if (ProductParams.sortSelected) {
      param = param.append('sort', ProductParams.sortSelected);
    }
    if (ProductParams.search) {
      param = param.append('Search', ProductParams.search);
    }
          param = param.append('PageNumbre', ProductParams.PageNumbre);
          param = param.append('PageSize', ProductParams.PageSize);

    return this.http.get<Ipagination>(this.BaseUrl + "Products/get-all", { params: param });
  }

  getcategories() {
    return this.http.get<ICategory[]>(this.BaseUrl + "Categories/get-all");
  }
}
