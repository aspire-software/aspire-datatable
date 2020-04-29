
# Angular Currency Converter

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.


## Description

Angular currency converter is an angular library that help you to convert your money into various currencies by used of latest & historical currency exchange rates. 


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
	
    **host:** https://api.exchangeratesapi.io
    
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

## License

* Licence: MIT

  Copyright (c) 2020 Aspire Software Solutions

  <div style='text-align: justify;'>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br><br>
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</div>

## Author

Aspire Software Solutions
