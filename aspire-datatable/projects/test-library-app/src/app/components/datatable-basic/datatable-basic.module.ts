import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableBasicComponent } from './datatable-basic.component';
import { AspireDatatableModule } from 'aspire-datatable';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DatatableBasicComponent],
  imports: [
    CommonModule,
    AspireDatatableModule,
    RouterModule
  ],
  exports: [DatatableBasicComponent]
})
export class DatatableBasicModule { }
