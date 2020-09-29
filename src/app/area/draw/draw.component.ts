import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css'],
  animations: [
                trigger('drawShape',[
                  state('rectangle', style({
                      width: '100px',
                      backgroundColor: '#555',
                      display: "block",
                    })
                  ),
                  state('square', style({
                      width: '50px',
                      backgroundColor: '#555',
                      display: "block",
                    })
                  ),
                  state('triangle', style({
                      borderLeft: '25px solid transparent',
                      borderRight: '25px solid transparent',
                    	borderBottom: '50px solid #555',
                      display: "block"
                    })
                  ),
                  state('circle', style({
                    	borderRadius: '50%',
                      backgroundColor: '#555',
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