import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NumberSystemConvertorComponent } from './number-system-convertor.component';

const routes: Routes = [
  { path: '', component: NumberSystemConvertorComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NumberSystemConvertorComponent]
})
export class NumberSystemConvertorModule { }
