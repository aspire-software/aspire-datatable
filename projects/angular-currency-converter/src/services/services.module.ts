import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConversionService } from '../services/currency-conversion.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CurrencyConversionService]
})
export class ServicesModule { }
