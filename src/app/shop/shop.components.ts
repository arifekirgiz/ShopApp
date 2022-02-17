import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CategoryModel } from '../model/category.model';
import { CategoryRepository } from '../model/category.repository';
import { ProductRepository } from '../model/product.repository';
import { ProductModel } from '../model/products.model';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
    public selectCategory :CategoryModel[] =  [];
    public id : number = 0
    public productsPerPage = 3
    public selectPage = 1
 

    constructor(
        private productRepository : ProductRepository,
        private categoryRepository : CategoryRepository,
        private cart :Cart
        
    ) {
       
    }
   
    
    get products() : ProductModel[]{
        let index = (this.selectPage-1) * this.productsPerPage
    return this.productRepository.getProducts(this.id).slice(index, index +this.productsPerPage)
    }
    get category() : CategoryModel[]{
        return this.categoryRepository.getCategorys()
    }
    get pageNumbers() : number[]{
        return Array(Math.ceil(this.productRepository.getProducts(this.selectCategory).length / this.productsPerPage )).fill(0).map((a,i)=>i+1)
    }
    changePage(p : number){
        this.selectPage = p ;

    }
   changeCategory(newCategory ?:any){
       console.log(newCategory.id)
       this.id = newCategory.id
       this.selectCategory = newCategory

   }
   addProductToCart(product : ProductModel){

   }
 
}
