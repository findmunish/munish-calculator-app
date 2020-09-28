import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BasicCalculatorComponent } from './basic-calculator.component';

const routes: Routes = [
  { path: '', component: BasicCalculatorComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasicCalculatorComponent]
})
export class BasicCalculatorModule { }
