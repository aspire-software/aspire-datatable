import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableBasicComponent } from './datatable-basic.component';
import { AspireDatatableModule, AspirePaginationModule } from 'aspire-datatable';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DatatableBasicComponent],
  imports: [
    CommonModule,
    AspireDatatableModule,
    AspirePaginationModule,
    RouterModule
  ],
  exports: [DatatableBasicComponent]
})
export class DatatableBasicModule { }
