import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConversionService } from '../services/currency-conversion.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CurrencyConversionService],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [CurrencyConversionService],
  exports: [CurrencyConversionService]
})
export class ServicesModule { }
