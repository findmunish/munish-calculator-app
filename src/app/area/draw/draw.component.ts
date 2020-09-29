import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css'],
  animations: [
                trigger('drawShape',[
                  state('show-shape', style({
                      backgroundColor: '#555',
                      display: "block",
                    })
                  ),
                  state('show-triangle', style({
                      borderLeft: '25px solid transparent',
                      borderRight: '25px solid transparent',
                    	borderBottom: '50px solid #555',
                      display: "block"
                    })
                  ),
                  state('no-show', style({
                      display: "none",
                    })
                  ),
                  transition("* =>*", [animate("3s")]),
                ])
              ]
})
export class DrawComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.isDrawShape = false;
  }
  isDrawShape = false;
  emptyText = '        ';
  @Input() drawFigure;
}