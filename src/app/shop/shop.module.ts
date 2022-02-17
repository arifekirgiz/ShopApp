import {NgModule} from '@angular/core';
import {ModelModule} from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop.components';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
    declarations: [
      ShopComponent,
      NavbarComponent,
      CartSummaryComponent,
      CartDetailComponent,
      CheckoutComponent
    ],
    imports: [
        ModelModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    exports: [ShopComponent ,CartDetailComponent,CheckoutComponent]
  })

export class ShopModule{}