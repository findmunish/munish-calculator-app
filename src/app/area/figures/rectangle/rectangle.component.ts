import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  @Input() figureObj;
  @Output() setArea = new EventEmitter()
  calculateArea() {
    this.setArea.emit(this.figureObj.dimensions.length * this.figureObj.dimensions.width)
  }
}