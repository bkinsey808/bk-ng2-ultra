declare var require: any;

import { Component } from 'angular2/core';

@Component({
  selector: 'app-footer',
  template: require('./footer.template.html')
})
export class FooterComponent {
  constructor() {
    console.log('footer');
  }
}
