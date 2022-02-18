import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import  {FormGroup ,FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  public username : string = "";
  public password  : string  = "";
  public errorMessage : string = "" ;


  constructor( private router : Router,
    private authService : AuthService
   ) { }

  ngOnInit(): void {
  
  }

   login(form :NgForm){
     console.log("form valid",form.valid)
     if(form.valid){
       this.authService.authenticate(this.username,this.password)
       .subscribe(data =>{
         if(data)
         console.log("auth complate",data)
         {
           this.router.navigateByUrl('/admin/main');
         }
         this.errorMessage= "HATA !"
       })
     }
     else {
       this.errorMessage = "HATA"
     }
   }

 
}
