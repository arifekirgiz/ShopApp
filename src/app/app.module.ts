import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopModule } from './shop/shop.module';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.components';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShopModule,
    RouterModule.forRoot([
     { path :'shop', component:ShopComponent } ,
     { path :'cart', component:CartDetailComponent } ,
     { path :'checkout', component:CheckoutComponent } ,
     { path :'*', redirectTo : "/shop" } 

    ])
  
  
  ],
  providers: [],
  bootstrap: [AppComponent,ShopModule]
})
export class AppModule { }
