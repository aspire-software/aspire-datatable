import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyConversionComponent } from './currency-conversion.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { CurrencyMainModule } from 'angular-currency-converter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CurrencyConversionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    CurrencyMainModule
  ],
  exports: [CurrencyConversionComponent]
})
export class CurrencyConversionModule { }
