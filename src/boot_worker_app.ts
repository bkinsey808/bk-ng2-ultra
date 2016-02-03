import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'zone.js/lib/browser/zone-microtask';
import 'zone.js/lib/browser/long-stack-trace-zone';

import { platform, provide, ApplicationRef, ComponentRef, Injector } from 'angular2/core';
import { WORKER_APP_PLATFORM, WORKER_APP_APPLICATION } from 'angular2/platform/worker_app';
import { WORKER_APP_ROUTER, initRouter } from './.patches/worker/worker';
import { APP_BASE_HREF, Router } from 'angular2/router';
import { App } from './client/app/app.component';

const appRef: ApplicationRef = platform(WORKER_APP_PLATFORM).application([
  WORKER_APP_APPLICATION,
  WORKER_APP_ROUTER,
  provide(APP_BASE_HREF, { useValue: '/' }),
]);

initRouter(appRef).then(() => {
  return appRef.bootstrap(App, [])
    .then((compRef: ComponentRef) => {
      const injector: Injector = compRef.injector;
      const router:   Router   = injector.get(Router);

      return (<any> router)._currentNavigation;
    })
    .then(() => {
      setTimeout(() => {
        postMessage('APP_READY', undefined);
      });
    });
});
