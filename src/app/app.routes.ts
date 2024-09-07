import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { DispComponent } from './disp/disp.component';
export const routes:Routes=[
       { path:"registration/:user_type", component: RegistrationComponent },
       { path:"", component: DispComponent,pathMatch: 'full' },
       
];