import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipagination } from '../shared/Models/pagnation';

@Injectable({
  providedIn: 'root',
})
export class ShopsService {
 constructor(private http: HttpClient) {}
  BaseUrl = 'https://localhost:7238/api/';
  
  getProducts() {
   return this.http.get<Ipagination>(this.BaseUrl + "Products/get-all");
  }
}
