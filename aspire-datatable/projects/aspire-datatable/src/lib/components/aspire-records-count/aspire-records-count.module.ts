import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspireRecordsCountComponent } from '../aspire-records-count/aspire-records-count.component';
import { TableEventsService } from '../../shared/table-events.service';

@NgModule({
  declarations: [AspireRecordsCountComponent],
  imports: [
    CommonModule
  ],
  exports: [AspireRecordsCountComponent],
  providers: [TableEventsService]
})
export class AspireRecordsCountModule { }