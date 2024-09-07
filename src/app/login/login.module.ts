import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { RouterModule } from '@angular/router';
import {routes} from "./login.routes";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [RouterModule]
})
export class LoginModule {
  
 }
