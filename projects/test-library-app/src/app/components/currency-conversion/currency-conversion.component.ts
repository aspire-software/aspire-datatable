import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyConversionService } from 'angular-currency-converter';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.css']
})
export class CurrencyConversionComponent implements OnInit {
  model: NgbDateStruct;
  myForm: FormGroup;
  public amount: Number;
  public baseCurrencyRate: string; // base currencies rate  
  public baseCurrencyCode: string; // base currency code
  public convertedRates: any = []; // store converted 
  public currencyRates: any = [];  // store data from currency rates
  public apisSource: any; // apis source
  public disabled: boolean;
  public selectedSource: string; // selected source
  public submitted: boolean;
  public apisDetails: any;
  public host: any;

  constructor(private currencyConversionService: CurrencyConversionService) {
  }

  ngOnInit() {
    /* Make form value blank */
    this.myForm = new FormGroup({
      amount: new FormControl('', Validators.required),
      targetSource: new FormControl('', Validators.required),
      countryRates: new FormControl('', Validators.required),
      targetRates: new FormControl('', Validators.required),
      datePicker: new FormControl('')
    });

    /* Get apisConfigurations */
    this.apisDetails = this.currencyConversionService.getApisConfigurations()
    this.host = this.apisDetails.host
    this.apisSource = this.apisDetails.currencyRateSource


    // Get latest currencies rate [ default base: USD ]
    this.currencyConversionService.getCurrencyRates(`${this.host}/latest?base=USD`).subscribe(data => {
      if (data) {
        for (var key in data['rates']) {
          if (data['rates'].hasOwnProperty(key)) {
            this.currencyRates.push({ currencyCode: key, rate: data['rates'][key], defaultBase: data.base })
          }
        }
      }
    })
  }

  /* On source change  */
  async onSourceChange(event) {
    this.selectedSource = event.target.options[event.target.options.selectedIndex].text
    if (this.selectedSource == 'History') { // On select history user have to apply date
      this.disabled = false;
    } else {
      /* Get latest currencies rate by selection of latest option [ default base: USD ] */
      this.disabled = true;
      this.currencyRates = [];
      this.currencyConversionService.getCurrencyRates(`${this.host}/latest?base=USD`).subscribe(data => {
        if (data) {
          for (var key in data['rates']) {
            if (data['rates'].hasOwnProperty(key)) {
              this.currencyRates.push({ currencyCode: key, rate: data['rates'][key], defaultBase: data.base })
            }
          }
        }
      })
    }
  }

  /* On date change get currencies rate of specified date  */
  async onDateChange(model) {
    if (model !== undefined) {
      this.currencyRates = [];
      let date = `${model.year}-${model.month}-${model.day}`
      let url = `${this.host}/${date}`
      this.currencyConversionService.getCurrencyRates(url).subscribe(data => {
        if (data) {
          for (var key in data['rates']) {
            if (data['rates'].hasOwnProperty(key)) {
              this.currencyRates.push({ currencyCode: key, rate: data['rates'][key], defaultBase: data.base })
            }
          }
        }
      })
    }
  }

  isFieldValid(field: string) {
    return (
      this.myForm.get(field).errors && this.myForm.get(field).touched ||
      this.myForm.get(field).untouched &&
      this.submitted && this.myForm.get(field).errors
    );
  }

  /* Get submitted form values */
  async onSubmit(form: FormGroup) {
    this.submitted = true;
    this.convertedRates = [];

    if (this.myForm.invalid) {
      return;
    } else {
      let amount = form.value.amount;
      let baseCurrencyRate = form.value.countryRates.rate;
      let baseCurrencyCode = form.value.countryRates.currencyCode;
      let targetCurrencyRate = form.value.targetRates.rate;
      let targetCurrencyCode = form.value.targetRates.currencyCode;
      this.convertedRates = await this.currencyConversionService.convertCurrency(amount, baseCurrencyRate, baseCurrencyCode, targetCurrencyRate, targetCurrencyCode);
      this.resetForm()
    }
  }

  /* Reset form after submit values */
  resetForm() {
    this.submitted = false;
    this.myForm = new FormGroup({
      amount: new FormControl('', Validators.required),
      targetSource: new FormControl('', Validators.required),
      countryRates: new FormControl('', Validators.required),
      targetRates: new FormControl('', Validators.required),
      datePicker: new FormControl('')
    });
  }
}
