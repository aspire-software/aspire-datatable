# AngularCurrencyConverter

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Installation & usage guide


##### Install Package:

npm install angular-currency-converter --save

##### Import Service:

import { CurrencyConversionService } from 'angular-currency-converter';

##### Register Service:

Register currency conversion service to NgModule of your components typescript file.

`@NgModule({`<br>
  `imports: [...],`<br>
  `exports: [...],`<br>
  `declarations: [...],`<br>
  `providers: [CurrencyConversionService]`<br>
`})`


## Code scaffolding

Run `ng generate component component-name --project angular-currency-converter` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project angular-currency-converter`.
> Note: Don't forget to add `--project angular-currency-converter` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build angular-currency-converter` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build angular-currency-converter`, go to the dist folder `cd dist/angular-currency-converter` and run `npm publish`.

## Running unit tests

Run `ng test angular-currency-converter` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
