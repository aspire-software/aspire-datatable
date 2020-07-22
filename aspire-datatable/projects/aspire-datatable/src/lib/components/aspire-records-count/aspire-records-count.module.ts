import { NgModule } from '@angular/core';
import { AspireRecordsCountComponent } from '../aspire-records-count/aspire-records-count.component';
import { TableEventsService } from '../../shared/table-events.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AspireRecordsCountComponent],
  imports: [CommonModule],
  exports: [AspireRecordsCountComponent],
  providers: [TableEventsService]
})
export class AspireRecordsCountModule { }
