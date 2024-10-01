import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { InvestHomeComponent } from './component/invest-home/invest-home.component';
import { AboutComponent } from './component/about/about.component';
import { AppBarModule, NavigationModule } from "@progress/kendo-angular-navigation";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, InvestHomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_site';
}
