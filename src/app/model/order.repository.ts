import { Injectable,OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";

import { RestService } from "./rest.service";


@Injectable() //servis olarak kullanılacak ve bunu belirtmeliyiz.
export class OrderRepository implements OnInit{

private orders : Order[] = [];

constructor (private restService : RestService){}

ngOnInit() {}

getOrders() : Order[]{
    return this.orders ;
}

sevaOrder(order : Order) : Observable<Order>{
    return this.restService.saveOrder(order)

}

}