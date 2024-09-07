import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { LogoComponent } from '../logo/logo.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,LoginComponent,LogoComponent,HeaderComponent
  ]
})
export class DispModule { }
