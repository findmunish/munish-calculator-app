import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'area', loadChildren: () => import('./area/area.module').then(m => m.AreaModule)
  },
  {
    path: 'basic-calculator', loadChildren: () => import('./basic-calculator/basic-calculator.module').then(m => m.BasicCalculatorModule)
  },
  {
    path: 'number-system-convertor', loadChildren: () => import('./number-system-convertor/number-system-convertor.module').then(m => m.NumberSystemConvertorModule)
  },
  {
    path: 'percentage', loadChildren: () => import('./percentage/percentage.module').then(m => m.PercentageModule)
  },
  {
    path: 'temperature-convertor', loadChildren: () => import('./temperature-convertor/temperature-convertor.module').then(m => m.TemperatureConvertorModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }