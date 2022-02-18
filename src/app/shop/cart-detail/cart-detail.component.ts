import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { ProductModel } from 'src/app/model/products.model';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {
  itemCount : number = 0
  items : any[] = []
  total :number = 0

  constructor( private cart : Cart
   ) { 
    console.log(this.cart)
    this.itemCount = this.cart.itemCount
    this.items = this.cart.items
    this.total = this.cart.total
  }
  updateQuantity(item : ProductModel,value : number){
     this.cart.updateQuantity(item,value)
    this.cart = this.cart
     console.log("asf",this.cart)
  }
  remove(id : number)
  {
    this.cart.removeItem(id)
  }
 
  
  
  ngOnInit(): void {
   console.log("selam")
  
  }

}
