declare var require: any;

import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { NavComponent   } from '../nav/nav.component';
import { AsideComponent } from '../aside/aside.component';
import { HomeComponent   } from '../../content/home/home.component';
import { AboutComponent  } from '../../content/about/about.component';

@Component({
  selector: 'app-body',
  template: require('./body.template.html'),
  directives: [
    NavComponent,
    AsideComponent,
    HomeComponent,
    AboutComponent,
    ROUTER_DIRECTIVES // Do I need all of this?
  ],
  styles: [require('./body.css')]
})
export class BodyComponent {
  name: string;
  constructor() {
    this.name = 'World';
    console.log('body');
  }
}
