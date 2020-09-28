import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  title = 'Mathematical Tools App';
  operations = [
                  {name: 'Basic Calculator', routingLink:'/basic-calculator'},
                  {name: 'Percentage', routingLink:'/percentage'},
                  {name: 'Area Calculator', routingLink:'/area'},
                  {name: 'Temperature Convertor', routingLink:'/temperature-convertor'},
                  {name: 'Number System Convertor', routingLink:'/number-system-convertor'}
                ];
  operationSelected={name: '', routingLink: ''};
  selectOperation() {
    let index = this.operations.findIndex(operation => this.operationSelected.name === operation.name);
    this.operationSelected.routingLink = this.operations[index].routingLink;
  }
  executeOperation() {}
}