import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tempConversion',
  templateUrl: './tempConversion.component.html',
  styleUrls: ['./tempConversion.component.css']
})
export class TempConversionComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  tempConvForm = this.formBuilder.group({
    temperature: ''
  })
  init() {
    this.tempConvForm.get('temperature').setValue(this.tempObj.temp);
    this.tempObj.convertedTemp = this.tempObj.tempConvFn(this.tempObj.temp);
  }
  ngOnInit(): void {
    this.init();
    this.tempConvForm.get('temperature').valueChanges.subscribe(tempValue => {
      this.tempObj.temp = tempValue;
      this.tempObj.convertedTemp = this.tempObj.tempConvFn(tempValue);
    });
    this.isTempConverted = true;
  }
  isTempConverted = false;
  @Input() tempObj;
}