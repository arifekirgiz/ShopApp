import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from './category.model';
import { ProductModel } from './products.model';
import { Order } from './order.model'
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  baseUrl = `${environment.apiBaseUrl}`
  // baseUrl : string="http://localhost:3000/";
  token : string = "" ;

  constructor( private http :HttpClient) { }
 
  getProducts(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.baseUrl + 'product') ; 
  }
  getCategory(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(this.baseUrl + 'categories') ; 
  }
  saveOrder(order :Order): Observable<Order>{
    return this.http.post<Order>(this.baseUrl + 'orders',order)

  }
  authentication( username : string , password : string) :Observable<boolean>{
    console.log("rest.service" , username , password)
    return this.http.post<any>(this.baseUrl + 'login',
    {
      username : username,
      password : password
    }).pipe(map(data =>{
      console.log("data rest service", data)
      this.token = data.success ? data.token : null ;
      console.log("token rest service",this.token);
      return data.success ; 

    }))
  }


}
