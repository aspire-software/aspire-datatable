import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspireDatatableComponent } from './aspire-datatable.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AspireSearchingModule } from '../aspire-searching/aspire-searching.module';

@NgModule({
  declarations: [
    AspireDatatableComponent,
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AspireSearchingModule
  ],
  exports: [
    AspireDatatableComponent
  ]
})
export class AspireDatatableModule { }
