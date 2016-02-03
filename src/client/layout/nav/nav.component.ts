declare var require: any;

import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';
//import { NavService } from './nav.service';
import { HomeComponent } from '../../content/home/home.component';
import { AboutComponent } from '../../content/about/about.component';

@Component({
  selector: 'app-nav',
/*  bindings: [NavService],*/
  template: require('./nav.template.html'),
  styles: [require('./nav.css')],
  directives: [RouterLink]
})

export class NavComponent {
  name:     string;
  navItems: Array<any>;

  constructor(/*api: NavService*/) {
    console.log('menu');
    this.name = 'YAY!!!!!';
    this.navItems = [];
/*
    api.get()
    .then(r => r.json())
    .then(r => {
       this.navItems = r;
       console.log(this.navItems);
    });
*/
  }
}
