import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableBasicComponent } from './datatable-basic.component'


@NgModule({
  declarations: [DatatableBasicComponent],
  imports: [
    CommonModule
  ],
  exports: [DatatableBasicComponent]
})
export class DatatableBasicModule { }
