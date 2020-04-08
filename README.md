
# AngularCurrencyConverter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.

## Installation & usage guide

npm install angular-currency-converter --save

import { CurrencyMainModule } from 'angular-currency-converter';

Add CurrencyMainModule under @NgModule of your module file.

`@NgModule({`<br>
  `declarations: [`<br>
    `AppComponent`<br>
  `],`<br>
  `imports: [`<br>
    `BrowserModule,`<br>
    `CurrencyMainModule,`<br>
    `BrowserAnimationsModule`<br>
  `],`<br>
  `providers: [],`<br>
  `bootstrap: [AppComponent]`<br>
`})`

Integrate component into your angular html file

`<lib-currency-main></lib-currency-main>`

**Usage:** Enter amount and select base currency you wish to convert.This will give you list of converted value as per base rate of currencies.

EX. 10 USD to convert into various currencies.

## Project Configuration

`Angular CLI: 7.3.10`<br/>
`Node: 8.9.0`<br/>
`OS: linux x64`<br/>
`Angular: 7.2.16`<br/>
`... animations, common, compiler, compiler-cli, core, forms`<br/>
`... language-service, platform-browser, platform-browser-dynamic`<br/>
`... router`

Package                            Version
------------------------------------------------------------
`@angular-devkit/architect          0.13.10`<br/>
`@angular-devkit/build-angular      0.13.10`<br/>
`@angular-devkit/build-ng-packagr   0.13.10`<br/>
`@angular-devkit/build-optimizer    0.13.10`<br/>
`@angular-devkit/build-webpack      0.13.10`<br/>
`@angular-devkit/core               7.3.10`<br/>
`@angular-devkit/schematics         7.3.10`<br/>
`@angular/cdk                       7.3.7`<br/>
`@angular/cli                       7.3.10`<br/>
`@ngtools/json-schema               1.1.0`<br/>
`@ngtools/webpack                   7.3.10`<br/>
`@schematics/angular                7.3.10`<br/>
`@schematics/update                 0.13.10`<br/>
`ng-packagr                         4.7.1`<br/>
`rxjs                               6.3.3`<br/>
`typescript                         3.2.4`<br/>
`webpack 4.29.0`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
