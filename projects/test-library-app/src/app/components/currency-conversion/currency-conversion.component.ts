import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyConversionService } from 'angular-currency-converter';
import { NgbDateStruct,NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.css'],
})
export class CurrencyConversionComponent implements OnInit {
  model: NgbDateStruct;
  myForm: FormGroup;
  public amount: Number;
  public baseCurrencyRate: string; // base currencies rate  
  public baseCurrencyCode: string; // base currency code
  public convertedRates: any = []; // store converted 
  public currencyRates: any = [];  // store data from currency rates
  public apisSource: any;          // apis source for source currencies rates dropdown
  public disabled: boolean;        // disable calender icon 
  public selectedSource: string;   // selected source
  public submitted: boolean;       // handle form submit
  public apisDetails: any;         // api configurations 
  public host: any;                // host api
  public isVisible: boolean;       // table visibility
  public dateError: boolean;       // show date error

  constructor(private currencyConversionService: CurrencyConversionService,private calendar: NgbCalendar) {
  }

  ngOnInit() {

    this.isVisible = false; 
    this.disabled = true;
    this.dateError = false;

    /* Make form value blank */
    this.myForm = new FormGroup({
      amount: new FormControl('', Validators.required),
      targetSource: new FormControl('', Validators.required),
      countryRates: new FormControl('', Validators.required),
      targetRates: new FormControl('', Validators.required),
      datePicker: new FormControl({value: undefined, disabled: true})
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
    }, error => {
      console.log("Error", error)
    })
  }

  /* On source change  */
  async onSourceChange(event) {
    this.dateError= false;
    this.selectedSource = event.target.options[event.target.options.selectedIndex].text
    if (this.selectedSource == 'History') { // On select history user have to apply date
      this.myForm.controls['datePicker'].enable();
      this.disabled = false;
    } else {
      /* Get latest currencies rate by selection of latest option [ default base: USD ] */
      this.myForm.controls['datePicker'].disable();
      this.disabled = true;
      this.currencyConversionService.getCurrencyRates(`${this.host}/latest?base=USD`).subscribe(data => {
        if (data) {
          for (var key in data['rates']) {
            if (data['rates'].hasOwnProperty(key)) {
              this.currencyRates.push({ currencyCode: key, rate: data['rates'][key], defaultBase: data.base })
            }
          }
        }
      }, error => {
        console.log("Error", error)
      })
    }
  }

  /* On date change get currencies rate of specified date  */
  async onDateChange(model) {
    this.dateError = false;
    if (model !== undefined) {
      this.currencyRates = [];

      // Display error on selection of today & future dates [date picker]
     
      let getToday = this.calendar.getToday()
      let todayDate = Date.parse(`${getToday.year}-${getToday.month}-${getToday.day}`);
      let date = `${model.year}-${model.month}-${model.day}`
      let selectedDate = Date.parse(date)
      this.validateDate(selectedDate,todayDate)
      
      
      // Get currency rate history of selected date
      let url = `${this.host}/${date}`
      this.currencyConversionService.getCurrencyRates(url).subscribe(data => {
        if (data) {
          for (var key in data['rates']) {
            if (data['rates'].hasOwnProperty(key)) {
              this.currencyRates.push({ currencyCode: key, rate: data['rates'][key], defaultBase: data.base })
            }
          }
        }
      }, error => {
        console.log("Error", error)
      })
    }
  }

 /* Date validation */
  
  validateDate(selectedDate, todayDate) {
    if (selectedDate >= todayDate) {
      this.dateError = true
      return;
    }
  }

  /* Validation of form field & return error */
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
    if (this.myForm.invalid && (form.value.datePicker == undefined)) {
      this.isVisible= false;
      if(form.value.targetSource.value == 'history'){
        this.dateError = true;
      }else{
        this.dateError = false;
      }
      return;
    } else {
      this.isVisible = true;
      if(form.value.targetSource.value === 'history' && form.value.datePicker == undefined){
        this.dateError= true;
        this.isVisible= false;
        return;
      }
      let amount = form.value.amount;
      let baseCurrencyRate = form.value.countryRates.rate;
      let baseCurrencyCode = form.value.countryRates.currencyCode;
      let targetCurrencyRate = form.value.targetRates.rate;
      let targetCurrencyCode = form.value.targetRates.currencyCode;
      this.convertedRates = await this.currencyConversionService.convertCurrency(amount, baseCurrencyRate, baseCurrencyCode, targetCurrencyRate, targetCurrencyCode);
    }
  }

  /* Reset form after submit values */
  resetForm() {
    this.isVisible = false;
    this.submitted = false;
    this.myForm = new FormGroup({
      amount: new FormControl('', Validators.required),
      targetSource: new FormControl('', Validators.required),
      countryRates: new FormControl('', Validators.required),
      targetRates: new FormControl('', Validators.required),
      datePicker: new FormControl({value: undefined, disabled: true})
    });
  }
}
