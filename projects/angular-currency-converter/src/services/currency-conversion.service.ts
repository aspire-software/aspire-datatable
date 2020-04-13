import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {

  constructor(private http: HttpClient) { }
  public currencyRates = []   // store currency rates from api
  public url: string;
  public convertedRates: any = [];  //store converted values 


  /* 
  get currency rate from specified url
  */

  getCurrencyRates(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(map((data: Response) => data))
  }

  /* 
  convert currencies & accept parameter of amount, baseCurrencyRate , baseCurrencyCode, targetCurrencyRate, targetCurrencyCode
  */
  convertCurrency(amount: number, baseCurrencyRate: number, baseCurrencyCode: string, targetCurrencyRate: number, targetCurrencyCode: string) {
    this.convertedRates = []; // clear array before convert currencies
    let targetCurrencyRates: any = targetCurrencyRate; //1.08
    let countryCurrencyCode: any = targetCurrencyCode; //USD
    let rates: any = parseFloat(targetCurrencyRates).toFixed(2); // fixed floating digit to 2 digit
    let rateConversion: any = (amount * rates) / baseCurrencyRate;
    let parsedConversionRate = parseFloat(rateConversion).toFixed(2);
    this.convertedRates.push({ amount: amount, baseCurrencyCode: baseCurrencyCode, countryCurrencyCode: countryCurrencyCode, currencyRate: rates, convertedCountryRate: parsedConversionRate })
    return this.convertedRates
  }
}
