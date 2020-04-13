import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMainComponent } from './currency-main.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesModule } from '../../../services/services.module'


@NgModule({
  declarations: [CurrencyMainComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServicesModule
  ],
  exports: [CurrencyMainComponent]
})
export class CurrencyMainModule { }
