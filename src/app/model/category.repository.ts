import { Injectable,OnInit } from "@angular/core";

import { CategoryModel } from "./category.model";
import { RestService } from "./rest.service";


@Injectable()
export class CategoryRepository implements OnInit{

private category : CategoryModel[] = [] ; 

constructor (private restService : RestService){
    this.restService.getCategory().subscribe(data => 
        this.category = data
    )
}

ngOnInit() {

    
}
getCategory(id :number){
    return this.category.find(i => i.id=== id);
} 
getCategorys() : CategoryModel[]{
    return this.category
}
}