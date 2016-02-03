import { Component } from 'angular2/core';

@Component({
  selector: 'app-menu',
  template: require('./about.template.html')
})
export class AboutComponent {
  constructor() {
    console.log('about');
  }
}
