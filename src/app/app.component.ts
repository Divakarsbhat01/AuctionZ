import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { DispComponent } from "./disp/disp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DispComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AuctionZ';
}
