import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestHomeComponent } from './component/invest-home/invest-home.component';
import { AboutComponent } from './component/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvestHomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_site';
}
