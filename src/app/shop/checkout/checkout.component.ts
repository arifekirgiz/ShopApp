import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  orderSent : boolean =false ;
  submitted : boolean = false ;

  constructor(
    public order : Order,
    private orderRepository : OrderRepository
  ) { }

  ngOnInit(): void {
  }
  submitOrder(form : NgForm){
    this.submitted = true ;
    console.log("fromsubmit ",form)
    if(form.valid)
    {
      this.orderRepository.sevaOrder(this.order)
      .subscribe( data =>{
        this.order.clearOrder();
        this.orderSent = true;
        this.submitted = false;

      })
     
    }

  }
}
