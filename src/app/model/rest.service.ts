import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from './category.model';
import { ProductModel } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl : string="http://localhost:3000/";

  constructor( private http :HttpClient) {  console.log(this.baseUrl + 'product')}
 
  getProducts(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.baseUrl + 'product') ; 
  }
  getCategory(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(this.baseUrl + 'categories') ; 
  }
}
