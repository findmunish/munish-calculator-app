import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.selectedFigure.isDrawShape = false;
  }
  figures = [
              { name: 'Rectangle', dimensions: {length: -1, width: -1}, area: -1},
              { name: 'Square', dimensions: {side: -1}, area: -1 },
              { name: 'Circle', dimensions: {radius: -1}, area: -1 },
              { name: 'Triangle', dimensions: {sideA: -1, sideB: -1, sideC: -1}, area: -1 }
            ];
  selectedFigure = { name: '', index: -1, shapeType:'', shape:'', isDrawShape: false };
  alertMessage = '';
  setFigureObj() {
    return this.figures[this.selectedFigure.index];
  }
  setSelectedFigure() {
    return this.selectedFigure;
  }
  selectOperation() {
    this.selectedFigure.index = this.figures.findIndex(figure => figure.name === this.selectedFigure.name);
    this.alertMessage = '';
    this.selectedFigure.isDrawShape = true;
    this.figures[this.selectedFigure.index].area = -1;
    this.selectedFigure.shapeType = 'show-shape'
    this.selectedFigure.shape = this.selectedFigure.name.toLowerCase();
    if (this.selectedFigure.name === 'Triangle') {
      this.selectedFigure.shapeType = 'show-triangle'
    }
  }
  getArea(area) {
    let obj = this.figures[this.selectedFigure.index];
    obj.area = area;
    this.alertMessage = `The area of the given ${obj.name} having dimensions ${JSON.stringify(obj.dimensions)} is ${obj.area}`;
  }
}
