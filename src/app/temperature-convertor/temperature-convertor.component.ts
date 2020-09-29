import { Component, OnInit } from '@angular/core';
import { TEMPERATURES } from './temperatureData';

@Component({
  selector: 'app-temperature-convertor',
  templateUrl: './temperature-convertor.component.html',
  styleUrls: ['./temperature-convertor.component.css']
})
export class TemperatureConvertorComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  temperatureArray = TEMPERATURES;
  setTempObj(index) {
    return this.temperatureArray[index];
  }
  fahrenheit2Celsius(temp) {
    return (temp - 32) * (5/9);
  }
  celsius2Fahrenheit(temp) {
    return (temp * (9/5)) + 32;
  }
}