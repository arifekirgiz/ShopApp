import { Injectable } from "@angular/core";
import {ProductModel} from "./products.model";

//Service tanımalamak için @Injectable decorator’ ü kullanıyoruz. Angular, bootstrap aşamasında Injector adında bir yapıyı kurar ve bu sayede tüm dependency’ leri ilgili component’ lere yada ihtiyaç duyan service’ lere sunar.
@Injectable()

export class Cart{ //cart sınıfını servis gibi kullanacgız 
  
    public items : CartItem[] = [] ; 
    public itemCount : number = 0;
    public total : number = 0
   
   addItem(product : ProductModel,quantity :number = 1)
   {
       let item = this.items.find( i=> i.product.id == product.id)
       if(item!=undefined)
       {
        item.quantity += quantity;
       }
       else {
           this.items.push(new CartItem(product,quantity))
       }
    this.calculate();
   }
   calculate(){
       this.itemCount = 0;
       this.total = 0;

       this.items.forEach(item =>
        {
            this.itemCount += item.quantity;
           if(item.product.price) {
            this.total += (item.quantity * item.product.price)

           }
            
        })
   }
   clear(){
      this.items=[] ;
       this.itemCount = 0;
       this.total = 0
   }
   removeItem(id :number){
       let index = this.items.findIndex(i=>i.product.id == id)
        this.items.splice(index,1)
        this.calculate();
   }
   updateQuantity(product : ProductModel , quantity : number){
       let item = this.items.find(i=>i.product.id ==product.id)
       if(item){
           item.quantity =quantity
       }
    this.calculate();
  
   }
}

export class CartItem{ //dısarıda kullanacgımız için export eklyrz. 
    constructor (
        public product : ProductModel,
        public quantity :number
    ) {}
   
}