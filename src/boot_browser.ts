import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'zone.js/lib/browser/zone-microtask';
import 'zone.js/lib/browser/long-stack-trace-zone';

import { platform, ComponentRef, Injector } from 'angular2/core';
import { BROWSER_PROVIDERS, BROWSER_APP_PROVIDERS, } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS, Router } from 'angular2/router';
import { App } from './client/app/app.component';

platform(BROWSER_PROVIDERS).application(BROWSER_APP_PROVIDERS).bootstrap(App, [
  ROUTER_PROVIDERS
])
.then((compRef: ComponentRef) => {
  const injector: Injector = compRef.injector;
  const router:   Router   = injector.get(Router);

  return (<any> router)._currentNavigation;
})
.then(() => {
  document.dispatchEvent(new Event('BootstrapComplete'));
});