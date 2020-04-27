
# Angular Currency Converter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.

## Description

Angular currency converter is an angular library that help you to convert your money into various currencies by used of latest & historical currency exchange rates. 

## Project Configuration

`Angular CLI: 7.3.10`<br/>
`Node: 8.9.0`<br/>
`OS: linux x64`<br/>
`Angular: 7.2.16`<br/>
`... animations, common, compiler, compiler-cli, core, forms`<br/>
`... language-service, platform-browser, platform-browser-dynamic`<br/>
`... router`

  | Package  | Version
  | ------------- | ------------- |
  | @angular-devkit/architect  | 0.13.10  |
  | @angular-devkit/build-angular | 0.13.10 |
  | @angular-devkit/build-ng-packagr | 0.13.10 |
  | @angular-devkit/build-optimizer | 0.13.10 |
  | @angular-devkit/build-webpack | 0.13.10 |
  | @angular-devkit/core | 7.3.10|
  | @angular-devkit/schematics | 7.3.10 | 
  | @angular/cdk | 7.3.7 |
  | @angular/cli  | 7.3.10 |
  | @ngtools/json-schema | 1.1.0 |
  | @ngtools/webpack | 7.3.10 |
  | @schematics/angular | 7.3.10 |
  | @schematics/update | 0.13.10 |
  | ng-packagr | 4.7.1|
  | rxjs | 6.3.3 |
  | typescript | 3.2.4 |
  | webpack | 4.29.0 |


## Installation

```
npm install @aspire.software/angular-currency-converter --save
```

## How to use

* Import currency conversion into your components typescript file & add into constructor call.

  ```
  import { CurrencyConversionService } from 'angular-currency-converter';
  ```
  Register into constructor call
  
  ```
  constructor(private currencyConversionService: CurrencyConversionService){
  
  }
  ```

* Register currency conversion service to NgModule of your components module file.

  ```
  @NgModule({
    imports: [...],
    exports: [...],
    declarations: [...],
    providers: [CurrencyConversionService]
  })
  ```

* Get Api Configurations
	
    **host:** https://api.exchangeratesapi.io/latest
    
  ```
  this.currencyConversionService.getApisConfigurations()
  ```

* Get Latest Currency Rates

  ```
   this.currencyConversionService.getCurrencyRates(`${this.host}/latest?base=USD`).subscribe(data => {})
  ```

* Get Historical Currency Rates

    Get historical Data of currency rates on specific date.
    
    let url = `${this.host}/${date}?base=USD`
    i.e dateFormat=yyyy-mm-dd
    
    ```
     this.currencyConversionService.getCurrencyRates(url).subscribe(data => {})
    ```

* Convert Currency

  | Params  | Type | Required | Example
  | ------------- | ------------- |------------- |------------- |
  | amount  | number  | Require| i.e 50000 |
  |  baseCurrencyRate | number | Require | i.e 1.00 |
  |  baseCurrencyCode | string | Require | i.e USD |
  |  targetCurrencyRate | number | Require | i.e 76.78 |
  |  targetCurrencyCode | string | Require | i.e INR |

 * Request for Currency Convert     
      
    ```
    this.currencyConversionService.convertCurrency(amount, baseCurrencyRate, baseCurrencyCode, targetCurrencyRate,targetCurrencyCode);
    ```

## Dependencies

Foreign exchange rates API with currency conversion

* [Currencies rates API](https://exchangeratesapi.io/)

## Demo

![image description or alt text](https://raw.githubusercontent.com/ajay-aspire/angular-currency-converter/development/projects/angular-currency-converter/images/angular-currency-convert-latest.gif)

* Demo code availabel (path): /projects/test-library-app

## License

* Licence: MIT
