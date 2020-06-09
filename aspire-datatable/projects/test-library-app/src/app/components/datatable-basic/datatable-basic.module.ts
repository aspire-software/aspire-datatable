import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableBasicComponent } from './datatable-basic.component';
import { AspireDatatableModule, AspirePaginationModule } from 'aspire-datatable';
import { RouterModule } from '@angular/router';
import { AspirePopupModule } from 'projects/aspire-datatable/src/lib/components/aspire-popup/aspire-popup.module';

@NgModule({
  declarations: [DatatableBasicComponent],
  imports: [
    CommonModule,
    AspireDatatableModule,
    AspirePaginationModule,
    RouterModule,
    AspirePopupModule
  ],
  exports: [DatatableBasicComponent]
})
export class DatatableBasicModule { }
