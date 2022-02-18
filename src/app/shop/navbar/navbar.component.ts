import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private authService : AuthService,
               private router : Router) { }

  ngOnInit(): void {
  }
  Logout(){
     this.authService.clear();
     this.router.navigateByUrl('/shop');
  }
}
