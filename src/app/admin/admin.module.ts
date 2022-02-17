import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,

    BrowserAnimationsModule
  ]
})
export class AdminModule { }
