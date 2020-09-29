import {figure, operation} from './figuresInterface';
export const OPERATION_TYPES = {
      AREA: 'area',
      PERIMETER: 'Perimeter'
    };
export const FIGURE_TYPES = {
      RECTANGLE: 'Rectangle',
      SQUARE: 'Square',
      CIRCLE: 'Circle',
      TRIANGLE: 'Triangle'
    };
export const OPERATIONS: operation[] = [
      { operationType: OPERATION_TYPES.AREA },
      { operationType: OPERATION_TYPES.PERIMETER }
    ]
export const FIGURES: figure[] = [
      {
        name: FIGURE_TYPES.RECTANGLE,
        figureEdges: [
          {
            value: '',
            caption: 'Length'
          },
          {
            value: '',
            caption: 'Width'
          },
        ],
        operation: OPERATION_TYPES.AREA,
        result: -1.0, 
        calculateFn: calculateForRectangle
      },
      {
        name: FIGURE_TYPES.SQUARE,
        figureEdges: [
          {
            value: '',
            caption: 'Side'
          }
        ],
        operation: OPERATION_TYPES.AREA,
        result: -1.0,
        calculateFn: calculateForSquare
      },
      {
        name: FIGURE_TYPES.CIRCLE,
        figureEdges: [
          {
            value: '',
            caption: 'Radius'
          }
        ],
        operation: OPERATION_TYPES.AREA,
        result: -1.0,
        calculateFn: calculateForCircle
      },
      {
        name: FIGURE_TYPES.TRIANGLE,
        figureEdges: [
          {
            value: '',
            caption: 'SideA'
          },
          {
            value: '',
            caption: 'SideB'
          },
          {
            value: '',
            caption: 'SideC'
          }
        ],
        operation: OPERATION_TYPES.AREA,
        result: -1.0,
        calculateFn: calculateForTriangle
      }
    ];

function calculateForRectangle(figure) {
  let length = figure.figureEdges[0].value;
  let width = figure.figureEdges[1].value;
  if(figure.operation.toLowerCase() === OPERATION_TYPES.AREA) {
    figure.result = length * width;
  } else if(figure.operation.toLowerCase() === OPERATION_TYPES.PERIMETER) {
    figure.result = 2 * (length + width);
  }
  return figure.result;
}
function calculateForSquare(figure) {
  let side = figure.figureEdges[0].value;
  if(figure.operation.toLowerCase() === OPERATION_TYPES.AREA) {
    figure.result = side * side;
  } else if(figure.operation.toLowerCase() === OPERATION_TYPES.PERIMETER) {
    figure.result = 4 * side;
  }
  return figure.result;
}
function calculateForCircle(figure) {
  let radius = figure.figureEdges[0].value;
  let pi = Math.PI;
  if(figure.operation.toLowerCase() === OPERATION_TYPES.AREA) {
    figure.result = pi * Math.pow(radius, 2);
  } else if(figure.operation.toLowerCase() === OPERATION_TYPES.PERIMETER) {
    figure.result = 2 * pi * radius;
  }
  return figure.result;
}
function calculateForTriangle(figure) {
  let side1 = figure.figureEdges[0].value;
  let side2 = figure.figureEdges[1].value;
  let side3 = figure.figureEdges[2].value;
  if(figure.operation.toLowerCase() === OPERATION_TYPES.AREA) {
    let s = (side1 + side2 + side3 ) / 2;
    figure.result = Math.sqrt( s*((s-side1)*(s-side2)*(s-side3)) );
  } else if(figure.operation.toLowerCase() === OPERATION_TYPES.PERIMETER) {
    figure.result = side1 + side2 + side3;
  }
  return figure.result;
}