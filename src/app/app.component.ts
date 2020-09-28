import { Component, VERSION } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.router.events.pipe(
       filter((event) => event instanceof NavigationEnd)
     ).subscribe(res => this.setInitialRoute(res))
  }
  setInitialRoute(result) {
    let index = this.operations.findIndex(operation => result.urlAfterRedirects === operation.routingLink)
    if (index !== -1) {
      this.operationSelected.name = this.operations[index].name;
      this.operationSelected.routingLink = this.operations[index].routingLink;
      this.isShowSelectionScreen = false;
    }
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
  isShowSelectionScreen = true;
  executeOperation() {
    this.isShowSelectionScreen = false;
  }
  OnClickHome() {
    this.operationSelected.name = '';
    this.operationSelected.routingLink = '';
    this.isShowSelectionScreen = true;
    this.router.navigateByUrl('/');
  }
}
