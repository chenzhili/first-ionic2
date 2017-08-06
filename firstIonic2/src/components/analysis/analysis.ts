import { Component } from '@angular/core';

/**
 * Generated class for the Analysis component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'analysis',
  templateUrl: 'analysis.html'
})
export class Analysis {

  text: string;

  constructor() {
    console.log('Hello Analysis Component');
    this.text = 'Hello World';
  }

}
