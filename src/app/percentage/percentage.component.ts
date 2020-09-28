import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit {

  calculatedInterest: number;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.simpleInterestForm.valueChanges.subscribe(value => {
      this.calculatedInterest = null;
    })
  }
  simpleInterestForm = this.formBuilder.group({
    principal: ["", Validators.required],
    rate: ["", Validators.required],
    time: ["", Validators.required]
  });
  labelPrincipal = 'PrincipalAmount';
  labelRate = 'Rate of Interest / Annum';
  labelTime = 'Interest Calculation Period (in years)'
  calculateSimpleInterest() {
    let {principal, rate, time} = this.simpleInterestForm.value;
    this.calculatedInterest =  (principal * rate * time ) / 100;
  }
}
