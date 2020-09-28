import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  @Input() figureObj;
  @Output() setArea = new EventEmitter;
  calculateArea() {
    this.setArea.emit(Math.PI * this.figureObj.dimensions.radius * this.figureObj.dimensions.radius);
  }
}