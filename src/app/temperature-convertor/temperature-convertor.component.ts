import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-convertor',
  templateUrl: './temperature-convertor.component.html',
  styleUrls: ['./temperature-convertor.component.css']
})
export class TemperatureConvertorComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  temperatureArray = [
                        {name: 'Celsius', convertedName: 'Farhenheit', units: 'C', convertedUnits: 'F', temp: 0, convertedTemp: 0, tempConvFn: this.celsius2Fahrenheit},
                        {name: 'Farhenheit', convertedName: 'Celsius', units: 'F',convertedUnits: 'C',  temp: 0, convertedTemp: 0, tempConvFn: this.fahrenheit2Celsius},
                    ]
  setTempObj(index) {
    return this.temperatureArray[index];
  }
  fahrenheit2Celsius(temp) {
    return (temp - 32) * (5/9)
  }
  celsius2Fahrenheit(temp) {
    return (temp * (9/5)) + 32
  }
}