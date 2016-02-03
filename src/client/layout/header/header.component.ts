declare var require: any;

import { Component } from 'angular2/core';

@Component({
  selector: 'app-header',
  template: require('./header.template.html'),
  styles: [require('./header.css')],
})
export class HeaderComponent {
  constructor() {
    console.log('header');
  }
}
