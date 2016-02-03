# bk-ng2-ultra

Massive credit and thanks goes to Alex Podskrebyshev and his project [https://github.com/alexpods/angular2-universal-starter](https://github.com/alexpods/angular2-universal-starter)

This project derives heavily from that project but adds some additional features including the holy grail layout,
a different component naming system, and a different directory structure for project files.

<!--[![Build Status](https://travis-ci.org/bkinsey808/bk-ng2-ultra.svg?branch=master)](https://travis-ci.org/bkinsey808/bk-ng2-ultra)
[![Dependency Status](https://david-dm.org/bkinsey808/bk-ng2-ultra.svg)](https://david-dm.org/bkinsey808/bk-ng2-ultra)
[![devDependency Status](https://david-dm.org/bkinsey808/bk-ng2-ultra/dev-status.svg)](https://david-dm.org/bkinsey808/bk-ng2-ultra#info=devDependencies)
[![Issue Stats](http://issuestats.com/github/bkinsey808/bk-ng2-ultra/badge/pr?style=flat-square)](http://issuestats.com/github/bkinsey808/bk-ng2-ultra)
[![Issue Stats](http://issuestats.com/github/bkinsey808/bk-ng2-ultra/badge/issue?style=flat-square)](http://issuestats.com/github/bkinsey808/bk-ng2-ultra)
[![Join the chat at https://gitter.im/bkinsey808/bk-ng2-ultra](https://badges.gitter.im/bkinsey808/bk-ng2-ultra.svg)](https://gitter.im/bkinsey808/bk-ng2-ultra?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
-->

#What we've got here

- [Server Side rendering](https://angularu.com/VideoSession/2015sf/angular-2-server-rendering) for instant page loading
- Entire Angular2 application is running in a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) (UI always will be smooth)
- [Preboot](https://www.npmjs.com/package/preboot) to catch browser events before Angular2 is ready to work (you can experiment with its options [here](https://github.com/bkinsey808/bk-ng2-ultra/blob/master/constants.js#L25))
- [Webpack](https://webpack.github.io/) and its awesome [Code Splitting](https://webpack.github.io/docs/code-splitting.html) feature which allows us to lazy load parts of an application.
- Live Reloading, a browser will be reloaded on any change in server or browser code. It works well for both a main thread and web workers.
- [Typescript](http://www.typescriptlang.org/) with [Typings](https://github.com/typings/typings)
- [PostCSS](https://github.com/postcss/postcss) with [CSSNext](http://cssnext.io/)
- Linting with [TSLint](http://palantir.github.io/tslint/)
- [Express](http://expressjs.com/) - de facto standard for Node.js web apps.
- [PM2](http://pm2.keymetrics.io/) - most advanced Node.js process manager
- Unit testing with [Karma](http://karma-runner.github.io/)
- End-to-End testing with [Protractor](https://angular.github.io/protractor)

##Requirements

- **`node`** >= **4.2.0**
- **`npm`** >= **3.0.0**

#Quick start
```bash
# clone the repo without git history
git clone --depth 1 https://github.com/bkinsey808/bk-ng2-ultra.git

# change current directory to bk-ng2-ultra
cd bk-ng2-ultra

# install dependencies
npm install

# run the production server
npm start
```
Go to [http://localhost:3000](http://localhost:3000) in your browser.

You may want to stop or restart the production server:
```bash
# stop the production server
npm stop

# restart the production server
npm restart
```

## Development with Live Reloading
```bash
# make sure that the production server is not running
npm stop

# run the development server with live reloading support
npm run dev
```

The development server will watch for any changes, make rebuilds and reload a browser. All built code will be kept in 
memory, so `dist` folder will not be generated (**all** means code for **both** **client** and **server** sides).

##Turning server side rendering and web workers on/off
You can optionally turn server side rendering or web workers suport on/off. You just need
to change `HAS_SS` and `HAS_WW` in `constants.js` [here](https://github.com/bkinsey808/bk-ng2-ultra/blob/master/constants.js#L14):

```js
// ...

// Server side rendering. Set it to `false` to turn it of.
exports.HAS_SS = 'NG2_SS' in process.env ? process.env.NG2_SS === 'true' : true;
// For example:
// exports.HAS_SS = false;

// Web workers support. Set it to `false` to turn it of.
exports.HAS_WW = 'NG2_WW' in process.env ? process.env.NG2_WW === 'true' : true;
// For example:
// exports.HAS_WW = 'NG2_WW' in process.env ? process.env.NG2_WW === 'true' : false;

//...
```
Then you need to restart the server to apply the changes:
```bash
# for production server
npm restart

# for development server - stop its process and run it again
npm run dev
```

#Building
```bash
# build the project
npm run build

# build the project and start watching for its changes
npm run build:watch
```

#Linting
```bash
# check the project (source files)
npm run lint

# check the project and start watching for its changes
npm run lint:watch
```
If you don't agree with the default rules ([`tslint.json`](https://github.com/bkinsey808/bk-ng2-ultra/blob/master/tslint.json)), feel free to tell me about it.

#Testing
The next command will run both unit and end-to-end tests.

For end-to-end tests you need to start Selenium Server first (see [End-to-End Testing](#end-to-end-testing)).
```bash
# run all tests (single run)
npm test
```

##Unit Testing
```bash
# run unit tests (single run)
npm run unit

# run unit tests and start watch for changes
npm run unit:watch

# run unit tests for specified directory (path must be relative to root directory)
# currently you can specify paths only for "src" directory
npm run unit src/app

# run unit tests for specified file and start watch for changes
npm run unit:watch src/app/home.spec.ts
```

##End-to-End Testing
For end-to-end tests you nedd to start Selenium Server (webdriver) first.
```bash
# start Selenium Server (webdriver)
npm run webdriver:start

# run end-to-end test (single run)
npm run e2e
```

#Cleaning
```bash
# remove "dist" and "logs" folders
npm run clean

# remove "dist" folder
npm run clean:dist

# remove "logs" folder
npm run clean:logs
```

#License
The MIT License (MIT)

Copyright (c) 2016 Ben Kinsey

Copyright (c) 2016 Aleksey Podskrebyshev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

