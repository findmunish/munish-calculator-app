import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.css']
})
export class FiguresComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  @Input() figureObj;
  @Output() calculate = new EventEmitter;
  performCalculation(formArea) {
    this.calculate.emit(this.figureObj);
    formArea.reset();
  }
}
