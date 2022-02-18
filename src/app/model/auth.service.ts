import { Injectable } from "@angular/core";
import { RestService } from "src/app/model/rest.service";
import { Observable } from "rxjs";

@Injectable()

export class AuthService {
 constructor(private restService : RestService)    
 {}
 authenticate(username : string , password:string):Observable<boolean>

 {
      
    console.log("auth service", username,password)
     return this.restService.authentication(username,password) ;
 }
 get authenticated(): boolean{
     return this.restService.token != null;
 }
 clear()
 {
     this.restService.token == null;
 }
}