export interface figure {
  name: string;
  figureEdges: any;
  operation: string;
  result: number;
  calculateFn: Function;
}
export interface operation {
  operationType: string;
}