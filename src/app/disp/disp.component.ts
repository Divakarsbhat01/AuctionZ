import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LoginComponent } from '../login/login.component';
import { LogoComponent } from '../logo/logo.component';
import { RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-disp',
  standalone: true,
  imports: [HeaderComponent,LoginComponent,LogoComponent],
  templateUrl: './disp.component.html',
  styleUrl: './disp.component.scss'
})
export class DispComponent {

}
