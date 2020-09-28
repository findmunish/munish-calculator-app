import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  @Input() figureObj;
  @Output() setArea = new EventEmitter;
  calculateArea() {
    const side1 = this.figureObj.dimensions.sideA;
    const side2 = this.figureObj.dimensions.sideB;
    const side3 =  this.figureObj.dimensions.sideC;
    let s = (side1 + side2 + side3 ) / 2;
    this.setArea.emit( Math.sqrt( s*((s-side1)*(s-side2)*(s-side3)) ) );
  }
}