import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspireRecordsPerpageComponent } from '../aspire-records-perpage/aspire-records-perpage.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AspireRecordsPerpageComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AspireRecordsPerpageComponent]
})
export class AspireRecordsPerpageModule { }
