declare var require: any;

import { Component } from 'angular2/core';

@Component({
  selector: 'app-aside',
  template: require('./aside.template.html'),
  styles: [require('./aside.css')]
})
export class AsideComponent {
  constructor() {
    console.log('aside');
  }
}