import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TemperatureConvertorComponent } from './temperature-convertor.component';
import { TempConversionComponent } from './tempConversion/tempConversion.component';

const routes: Routes = [
  { path: '', component: TemperatureConvertorComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TemperatureConvertorComponent, TempConversionComponent]
})
export class TemperatureConvertorModule { }
