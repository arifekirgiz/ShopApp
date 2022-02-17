import { Injectable,OnInit } from "@angular/core";
import { CategoryModel } from "./category.model";


import { ProductModel } from "./products.model";
import { RestService } from "./rest.service";


@Injectable()
export class ProductRepository implements OnInit{

private products : ProductModel[] = [] ; 

constructor (private restService : RestService){
    
this.restService.getProducts().subscribe(data => 
    this.products = data
)
}

ngOnInit() {

  
    
}
getProduct(id :number){
    return this.products.find(i => i.id=== id);
} 
getProducts(categorid :any): ProductModel[]{
  
    if(categorid)
    {
        return  this.products.filter(p=>p.categriID == categorid)
    }
    else 
    {
       return this.products;
    }
   

}
}