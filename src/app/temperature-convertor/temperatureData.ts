import {temperature} from './temperatureInterface';
export const TEMPERATURES: temperature[] = [
        {
          name: 'Celsius',
          convertedName: 'Farhenheit',
          units: 'C',
          convertedUnits: 'F',
          temp: 0,
          convertedTemp: 0,
          tempConvFn: celsius2Fahrenheit
        },
        {
          name: 'Farhenheit',
          convertedName: 'Celsius',
          units: 'F',
          convertedUnits: 'C',
          temp: 0,
          convertedTemp: 0,
          tempConvFn: fahrenheit2Celsius
          }
    ]

export function fahrenheit2Celsius(temp) {
  return (temp - 32) * (5/9);
}
export function celsius2Fahrenheit(temp) {
  return (temp * (9/5)) + 32;
}