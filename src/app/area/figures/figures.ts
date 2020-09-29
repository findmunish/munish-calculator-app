import {figure, operation} from './figuresInterface';

export const OPERATIONS: operation[] = [
      { operationType: 'perimeter' },
      { operationType: 'area' }
    ]

export const FigureType = {
      RECTANGLE: 0,
      SQUARE: 1,
      CIRCLE: 2,
      TRIANGLE: 3
    };

export const FIGURES: figure[] = [
      {
        name: 'Rectangle',
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
        operation: 'area',
        result: -1.0, 
        calculateFn: null
      },
      {
        name: 'Square',
        figureEdges: [
          {
            value: '',
            caption: 'Side'
          }
        ],
        operation: 'area',
        result: -1.0,
        calculateFn: null
      },
      {
        name: 'Circle',
        figureEdges: [
          {
            value: '',
            caption: 'Radius'
          }
        ],
        operation: 'area',
        result: -1.0,
        calculateFn: null
      },
      {
        name: 'Triangle',
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
        operation: 'area',
        result: -1.0,
        calculateFn: null
      }
    ];