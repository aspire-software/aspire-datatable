import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspireRecordsPerpageComponent } from '../aspire-records-perpage/aspire-records-perpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AspireRecordsPerpageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AspireRecordsPerpageComponent]
})
export class AspireRecordsPerpageModule { }
