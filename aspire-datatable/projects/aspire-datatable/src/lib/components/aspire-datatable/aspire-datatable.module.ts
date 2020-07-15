import { NgModule } from '@angular/core';
import { AspireDatatableComponent } from './aspire-datatable.component';
import { AspireSearchingModule } from '../aspire-searching/aspire-searching.module';
import { AspirePaginationModule } from '../aspire-pagination/aspire-pagination.module';
import { AspireRecordsCountModule } from '../aspire-records-count/aspire-records-count.module';
import { TableEventsService } from '../../shared/table-events.service';
import { AspireRecordsPerpageModule } from '../aspire-records-perpage/aspire-records-perpage.module';
import { AspirePopupModule } from '../aspire-popup/aspire-popup.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AspireDatatableComponent,
  ],
  imports: [
    CommonModule,
    AspireSearchingModule,
    AspirePaginationModule,
    AspireRecordsCountModule,
    AspireRecordsPerpageModule,
    AspirePopupModule
  ],
  exports: [AspireDatatableComponent],
  providers: [TableEventsService]
})
export class AspireDatatableModule { }
