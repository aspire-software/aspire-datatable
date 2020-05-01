import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { apisConfigurations } from '../shared/config';
@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  constructor(private http: HttpClient) { }
  public url: string;
  public convertedRates: any = [];  // Store converted values
  public apisConfigurations: any = apisConfigurations;
  /*
  Get currency apis configurations
  */
  getApisConfigurations() {
    return pipe(this.apisConfigurations);
  }
  /*
  Get currency rate from specified url
  */
  getCurrencyRates(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(map((data: Response) => data, catchError(this.handleError)));
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  /*
  convert currencies & accept parameter of amount, baseCurrencyRate , baseCurrencyCode, targetCurrencyRate, targetCurrencyCode
  */
  convertCurrency(amount: number, baseCurrencyRate: number, baseCurrencyCode: string, targetCurrencyRate: number, targetCurrencyCode: string) {
    this.convertedRates = []; // Clear array before convert currencies
    const baseCurrencyRates: any = baseCurrencyRate; // Selected base currency rate
    const targetCurrencyRates: any = targetCurrencyRate; // Selected target currency rate
    const countryCurrencyCode: any = targetCurrencyCode; // Targeted currency code
    const baseRate = parseFloat(baseCurrencyRates).toFixed(2); // // Fixed to two decimal number
    const rates: any = parseFloat(targetCurrencyRates).toFixed(2);
    const rateConversion: any = (amount * rates) / baseCurrencyRate; // Conversion Formula
    const oneUnitConversion: any = (1 * rates) / baseCurrencyRate;
    const parsedConversionRate = parseFloat(rateConversion).toFixed(2);
    const parsedOneUnitRate = parseFloat(oneUnitConversion).toFixed(2);
    // tslint:disable-next-line:object-literal-shorthand
    this.convertedRates.push({ amount: amount, baseCurrencyCode: baseCurrencyCode, baseCurrencyRate: baseRate, countryCurrencyCode: countryCurrencyCode, currencyRate: rates, convertedCountryRate: parsedConversionRate, oneUnitConversion: parsedOneUnitRate });
    return this.convertedRates;
  }
}