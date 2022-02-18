import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AdminComponent, AuthComponent, MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,

   
  ]
})
export class AdminModule { }
