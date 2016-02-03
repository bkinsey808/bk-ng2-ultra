declare var require: any;

import { Component } from 'angular2/core';

@Component({
  selector: 'home',
  template: require('./home.template.html'),
  styles: [require('./home.css')]
})
export class HomeComponent {
  constructor() {
    name='HOME';
    console.log('homeie!');
  }
}
