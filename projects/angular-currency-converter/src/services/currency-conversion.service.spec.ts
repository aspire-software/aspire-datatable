import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CurrencyConversionService } from './currency-conversion.service';
import { HttpClient } from '@angular/common/http';
import { apisConfigurations } from '../shared/config';

describe('CurrencyConversionService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: CurrencyConversionService;
  const host: string = apisConfigurations.host;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyConversionService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CurrencyConversionService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('#getApiConfigurations', () => {

    beforeEach(() => {
      service = TestBed.get(CurrencyConversionService);
    });

    it('should return api configurations', () => {
      const data = service.getApisConfigurations();
      expect(typeof (data)).toEqual('object', 'returned data should be type of object');
    });
  });

  describe('#getCurrencyRates', () => {

    beforeEach(() => {
      service = TestBed.get(CurrencyConversionService);
    });
    it('should return currency rates as object', async () => {


      service.getCurrencyRates(`${host}/latest?base=USD`).subscribe(
        data => expect(typeof (data)).toEqual('object')
      );

      const req = httpTestingController.expectOne(`${host}/latest?base=USD`);
      expect(req.request.method).toEqual('GET');
    });

    it('should expect date if history request called', async () => {

      const expectedDate = '2020-01-03';
      const url = `${host}/${expectedDate}?base=USD`;

      service.getCurrencyRates(`${url}`).subscribe(
        data => expect(typeof (data)).toEqual('object')
      );

      // tslint:disable-next-line:no-shadowed-variable
      const req = httpTestingController.expectOne((req) => req.url === url);
      expect(req.request.method).toEqual('GET');
    });
  });

  describe('#getCurrencyConversionAmount', () => {

    const amount = 12;
    const baseCurrencyRate = 1;
    const baseCurrencyCode = 'USD';
    const targetCurrencyRate = 76.78;
    const targetCurrencyCode = 'INR';
    const convertedRates: any = [];

    beforeEach(() => {
      service = TestBed.get(CurrencyConversionService);
    });

    it('should return required parameter defined', async () => {
      expect(typeof(amount)).toEqual('number');
      expect(typeof(baseCurrencyRate)).toEqual('number');
      expect(typeof(baseCurrencyCode)).toEqual('string');
      expect(typeof(targetCurrencyRate)).toEqual('number');
      expect(typeof(targetCurrencyCode)).toEqual('string');
    });

    it('should not return any falsy values', async () => {

      convertedRates = await service.convertCurrency(amount, baseCurrencyRate, baseCurrencyCode, targetCurrencyRate, targetCurrencyCode);

      // it will check [false,0,"",undefined,null,NaN]

      expect(convertedRates[0].amount).not.toBeFalsy();
      expect(convertedRates[0].currencyRate).not.toBeFalsy();
      expect(convertedRates[0].baseCurrencyRate).not.toBeFalsy();
      expect(convertedRates[0].convertedCountryRate).not.toBeFalsy();
      expect(convertedRates[0].oneUnitConversion).not.toBeFalsy();
      expect(convertedRates[0].baseCurrencyCode).not.toBeFalsy();
      expect(convertedRates[0].countryCurrencyCode).not.toBeFalsy();

      service.getCurrencyRates(`${host}/latest?base=USD`).subscribe(
        data => expect(typeof (data)).toEqual('object')
      );

      const req = httpTestingController.expectOne(`${host}/latest?base=USD`);

      req.flush(convertedRates);
    });


    it('should return converted amount result length will be one', async () => {

      convertedRates = await service.convertCurrency(amount, baseCurrencyRate, baseCurrencyCode, targetCurrencyRate, targetCurrencyCode);

      expect(convertedRates.length).toEqual(1, 'should return non empty converted amount array');

      service.getCurrencyRates(`${host}/latest?base=USD`).subscribe(
        data => expect(typeof (data)).toEqual('object')
      );

      const req = httpTestingController.expectOne(`${host}/latest?base=USD`);

      req.flush(convertedRates);
    });

    it('should return converted amount result will be fixed to two decimal', async () => {

      convertedRates = await service.convertCurrency(amount, baseCurrencyRate, baseCurrencyCode, targetCurrencyRate, targetCurrencyCode);
      expect(convertedRates[0].currencyRate).toEqual(parseFloat(convertedRates[0].currencyRate).toFixed(2), 'should returned currency rate will be fixed to two decimal point');
      expect(convertedRates[0].baseCurrencyRate).toEqual(parseFloat(convertedRates[0].baseCurrencyRate).toFixed(2), 'should returned base currency rate will be fixed to two decimal point');
      expect(convertedRates[0].convertedCountryRate).toEqual(parseFloat(convertedRates[0].convertedCountryRate).toFixed(2), 'should returned converted rate will be fixed to two decimal point');
      expect(convertedRates[0].oneUnitConversion).toEqual(parseFloat(convertedRates[0].oneUnitConversion).toFixed(2), 'should returned one unit conversion rate will be fixed to two decimal point');

      service.getCurrencyRates(`${host}/latest?base=USD`).subscribe(
        data => expect(typeof (data)).toEqual('object')
      );

      const req = httpTestingController.expectOne(`${host}/latest?base=USD`);
      req.flush(convertedRates);
    });

    it('should be created', () => {
      const service: CurrencyConversionService = TestBed.get(CurrencyConversionService);
      expect(service).toBeTruthy();
    });
  });
});
