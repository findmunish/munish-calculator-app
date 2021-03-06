import { Component, OnInit } from '@angular/core';
import { OPERATION_TYPES, FIGURE_TYPES, OPERATIONS, FIGURES } from './figures/figures';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.resetSelectedObject()
  }
  figures = FIGURES;
  operations = OPERATIONS;
  selectedObject = { name: '', operationType: '', index: -1, displayFigureTypeSelection: false, shape:'', isDrawShape: false };
  alertMessage = '';
  convertToSentenceCase(text) {
    let sentence = text.toLowerCase().split(".");
    for(let i = 0; i< sentence.length; i++){
      sentence[i] = sentence[i].trim();
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(". ");
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
    let operationType = this.selectedObject.operationType;
    this.resetSelectedObject();
    this.selectedObject.displayFigureTypeSelection = true;
    for (let i = 0; i < this.figures.length; i++) {
      this.figures[i].operation = operationType;
    }
  }
  selectFigure() {
    this.selectedObject.index = this.figures.findIndex(figure => figure.name === this.selectedObject.name);
    this.alertMessage = '';
    this.selectedObject.isDrawShape = true;
    this.figures[this.selectedObject.index].result = -1;
    this.selectedObject.shape = this.selectedObject.name.toLowerCase();
  }
  resetSelectedObject() {
    this.selectedObject = { name: '', operationType: '', displayFigureTypeSelection: false, index: -1, shape:'', isDrawShape: false };
  }
}