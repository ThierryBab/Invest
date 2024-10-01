import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { InvestHomeComponent } from './component/invest-home/invest-home.component';
import { CarsComponent } from './component/cars/cars.component';

export const routes: Routes = [
    {
        path: 'invest',
        component: InvestHomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'cars',
        component: CarsComponent,
      },
];
