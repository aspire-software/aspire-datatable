import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { CurrencyConversionService } from 'angular-currency-converter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyConversionComponent } from './currency-conversion.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [CurrencyConversionComponent],
  declarations: [CurrencyConversionComponent],
  providers: [CurrencyConversionService]
})
export class CurrencyConversionModule { }