import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspireSearchingComponent } from './aspire-searching.component';
// import { AspireRecordsCountComponent } from '../aspire-records-count/aspire-records-count.component';
// import { TableEventsService } from '../../shared/table-events.service';

@NgModule({
  declarations: [AspireSearchingComponent],
  imports: [
    CommonModule
  ],
  exports: [AspireSearchingComponent],
  providers: []
})
export class AspireSearchingModule { }