import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AreaComponent } from './area.component';
import { FiguresComponent } from './figures/figures.component';
import { DrawComponent } from './draw/draw.component';

const routes: Routes = [
  { path: '', component: AreaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
                  AreaComponent,
                  FiguresComponent,
                  DrawComponent
                ]
})
export class AreaModule { }