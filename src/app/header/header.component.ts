import { Component } from '@angular/core';
import { HeaderModule } from './header.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent 
{
  a:string="a"
constructor()
{

}
}
