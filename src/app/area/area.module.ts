import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AreaComponent } from './area.component';
import { CircleComponent } from './figures/circle/circle.component';
import { RectangleComponent } from './figures/rectangle/rectangle.component';
import { SquareComponent } from './figures/square/square.component';
import { TriangleComponent } from './figures/triangle/triangle.component';
import { DrawComponent } from './figures/draw/draw.component';

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
                  CircleComponent,
                  RectangleComponent,
                  SquareComponent,
                  TriangleComponent,
                  DrawComponent
                ]
})

export class AreaModule { }