import { Component, OnInit } from '@angular/core';
import { FigureType, OPERATIONS, FIGURES } from './figures/figures';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.resetSelectedObject()
    this.figures[FigureType.RECTANGLE].calculateFn = this.calculateForRectangle;
    this.figures[FigureType.SQUARE].calculateFn = this.calculateForSquare;
    this.figures[FigureType.CIRCLE].calculateFn = this.calculateForCircle;
    this.figures[FigureType.TRIANGLE].calculateFn = this.calculateForTriangle;
  }
  figures = FIGURES;
  operations = OPERATIONS;
  selectedObject = { name: '', operationType: '', index: -1, displayFigureTypeSelection: false, shapeType:'', shape:'', isDrawShape: false };
  alertMessage = '';
  calculateForRectangle(figure) {
    let length = figure.figureEdges[0].value;
    let width = figure.figureEdges[1].value;
    if(figure.operation.toLowerCase() === 'area') {
      figure.result = length * width;
    } else if(figure.operation.toLowerCase() === 'perimeter') {
      figure.result = 2 * (length + width);
    }
    return figure.result;
  }
  calculateForSquare(figure) {
    let side = figure.figureEdges[0].value;
    if(figure.operation.toLowerCase() === 'area') {
      figure.result = side * side;
    } else if(figure.operation.toLowerCase() === 'perimeter') {
      figure.result = 4 * side;
    }
    return figure.result;
  }
  calculateForCircle(figure) {
    let radius = figure.figureEdges[0].value;
    let pi = Math.PI;
    if(figure.operation.toLowerCase() === 'area') {
      figure.result = pi * Math.pow(radius, 2);
    } else if(figure.operation.toLowerCase() === 'perimeter') {
      figure.result = 2 * pi * radius;
    }
    return figure.result;
  }
  calculateForTriangle(figure) {
    let side1 = figure.figureEdges[0].value;
    let side2 = figure.figureEdges[1].value;
    let side3 = figure.figureEdges[2].value;
    if(figure.operation.toLowerCase() === 'area') {
      let s = (side1 + side2 + side3 ) / 2;
      figure.result = Math.sqrt( s*((s-side1)*(s-side2)*(s-side3)) );
    } else if(figure.operation.toLowerCase() === 'perimeter') {
      figure.result = side1 + side2 + side3;
    }
    return figure.result;
  }
  getFigureDimensions() {
    let dimensions = this.figures[this.selectedObject.index].figureEdges;
    let dimensionText = '[ ';
    for (let i = 0; i < dimensions.length; i++) {
      let separator = (i == dimensions.length -1 ? ' ' : ', ');
      dimensionText += (dimensions[i].value + separator);
    }
    dimensionText += ' ]';
    return dimensionText;
  }
  calculateFn(figureObject) {
    let answer = figureObject.calculateFn(figureObject);
    this.alertMessage = `The ${figureObject.operation} of the given ${figureObject.name} having dimensions ${this.getFigureDimensions()} is: ${figureObject.result.toFixed(2)}`;
  }
  setFigureObj() {
    return this.figures[this.selectedObject.index];
  }
  setSelectedObject() {
    return this.selectedObject;
  }
  selectOperation() {
    this.selectedObject.displayFigureTypeSelection = true;
    for (let i = 0; i < this.figures.length; i++) {
      this.figures[i].operation = this.selectedObject.operationType;
    }
  }
  selectFigure() {
    this.selectedObject.index = this.figures.findIndex(figure => figure.name === this.selectedObject.name);
    this.alertMessage = '';
    this.selectedObject.isDrawShape = true;
    this.figures[this.selectedObject.index].result = -1;
    this.selectedObject.shapeType = 'show-shape'
    this.selectedObject.shape = this.selectedObject.name.toLowerCase();
    if (this.selectedObject.name === 'Triangle') {
      this.selectedObject.shapeType = 'show-triangle'
    }
  }
  resetSelectedObject() {
    this.selectedObject = { name: '', operationType: '', displayFigureTypeSelection: false, index: -1, shapeType:'', shape:'', isDrawShape: false };
  }
}