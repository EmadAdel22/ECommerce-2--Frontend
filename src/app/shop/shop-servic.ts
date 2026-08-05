import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Ipagination } from '../shared/Models/pagnation';
import { ICategory } from '../shared/Models/Category';


@Injectable({
  providedIn: 'root',
})
export class ShopService  {

  constructor(private http: HttpClient) { }



  BaseUrl = 'https://localhost:7238/api/';


  getproducts(CategoryId?: number, sortSelected?: string, search?: string) {
    let param = new HttpParams();
    if (CategoryId) {
      param = param.append('categoryId', CategoryId);
    }
    if (sortSelected) {
      param = param.append('sort', sortSelected);
    }
    if (search) {
      param = param.append('Search', search);
    }
    return this.http.get<Ipagination>(this.BaseUrl + "Products/get-all", { params: param });
  }

  getcategories() {
    return this.http.get<ICategory[]>(this.BaseUrl + "Categories/get-all");
  }
}
