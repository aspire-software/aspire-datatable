import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { apisConfigurations } from '../shared/config'

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {

  constructor(private http: HttpClient) { }
  public url: string;
  public convertedRates: any = [];  //Store converted values 
  public apisConfigurations: any = apisConfigurations;

  /* 
  Get currency apis configurations
  */

  getApisConfigurations() {
    return pipe(this.apisConfigurations)
  }

  /* 
  Get currency rate from specified url
  */

  getCurrencyRates(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(map((data: Response) => data))
  }

  /* 
  convert currencies & accept parameter of amount, baseCurrencyRate , baseCurrencyCode, targetCurrencyRate, targetCurrencyCode
  */
  convertCurrency(amount: number, baseCurrencyRate: number, baseCurrencyCode: string, targetCurrencyRate: number, targetCurrencyCode: string) {
    this.convertedRates = []; // Clear array before convert currencies

    let baseCurrencyRates: any = baseCurrencyRate; // Selected base currency rate
    let targetCurrencyRates: any = targetCurrencyRate; // Selected target currency rate
    
    let countryCurrencyCode: any = targetCurrencyCode; // Targeted currency code
    let baseRate = parseFloat(baseCurrencyRates).toFixed(2); // // Fixed to two decimal number
    let rates: any = parseFloat(targetCurrencyRates).toFixed(2); 
    let rateConversion: any = (amount * rates) / baseCurrencyRate; // Conversion Formula
    let oneUnitConversion: any = (1 * rates) /baseCurrencyRate;
    let parsedConversionRate = parseFloat(rateConversion).toFixed(2); 
    let parsedOneUnitRate = parseFloat(oneUnitConversion).toFixed(2);
    this.convertedRates.push({ amount: amount, baseCurrencyCode: baseCurrencyCode,baseCurrencyRate: baseRate, countryCurrencyCode: countryCurrencyCode, currencyRate: rates, convertedCountryRate: parsedConversionRate,oneUnitConversion:parsedOneUnitRate })
    return this.convertedRates;
  }
}
