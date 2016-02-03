declare var require: any;

import { Component } from 'angular2/core';

@Component({
  selector: 'app-menu',
  template: require('./not-found.template.html')
})
export class NotFoundComponent {
  constructor() {
    console.log('not found');
  }
}
