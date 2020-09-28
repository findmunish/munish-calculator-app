import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {  }
  @Input() figureObj;
  @Output() setArea = new EventEmitter;
  calculateArea() {
    this.setArea.emit(this.figureObj.dimensions.side * this.figureObj.dimensions.side);
  }
}