declare var require: any;

import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { Home } from '../home';
import { Workers } from '../workers';

import { HeaderComponent } from '../layout/header/header.component';
import { NavComponent    } from '../layout/nav/nav.component';
import { AsideComponent  } from '../layout/aside/aside.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { BodyComponent   } from '../layout/body/body.component';
import { HomeComponent   } from '../content/home/home.component';
import { AboutComponent  } from '../content/about/about.component';
import { NotFoundComponent } from '../content/not-found/not-found.component';

@Component({
  selector: 'app',
  template: require('./app.template.html'),
  styles: [require('./app.css')],
  directives: [
    HeaderComponent,
    NavComponent,
    AsideComponent,
    BodyComponent,
    FooterComponent
  ]
})
@RouteConfig([
  { path: '/',        name: 'Home',      component: HomeComponent,   useAsDefault: true },
  { path: '/workers', name: 'Workers',   component: Workers },
  { path: '/about',   name: 'About',     component: AboutComponent },
  { path: '/**',      name: 'Not Found', component: NotFoundComponent }
])
export class App {}
