
# Angular Currency Converter

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.


## Description

Angular currency converter is an angular library that help you to convert your money into various currencies by used of latest & historical currency exchange rates. 


## Installation

```
npm install @aspire.software/angular-currency-converter --save
```

## How to use

* Import currency conversion into your components typescript file.

  ```
  import { CurrencyConversionService } from 'angular-currency-converter';
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

 * Request Convert Currency     
      
    ```
    this.currencyConversionService.convertCurrency(amount, baseCurrencyRate, baseCurrencyCode, targetCurrencyRate,targetCurrencyCode);
    ```

## Dependencies

Foreign exchange rates API with currency conversion

* [Currencies rates API](https://exchangeratesapi.io/)

## Demo
![image description or alt text](https://raw.githubusercontent.com/ajay-aspire/angular-currency-converter/development/projects/angular-currency-converter/images/angular-currency-convert-latest.gif)

## License

* Licence: MIT

## Author

Aspire Software Solutions
