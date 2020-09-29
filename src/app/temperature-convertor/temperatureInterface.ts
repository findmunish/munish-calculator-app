
export interface temperature {
  name: string;
  convertedName: string;
  units: string;
  convertedUnits: string;
  temp: number;
  convertedTemp: number;
  tempConvFn: Function;
}