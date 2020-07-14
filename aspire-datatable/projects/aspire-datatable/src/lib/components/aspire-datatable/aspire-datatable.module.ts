import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspireDatatableComponent } from './aspire-datatable.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AspireSearchingModule } from '../aspire-searching/aspire-searching.module';
import { AspirePaginationModule } from '../aspire-pagination/aspire-pagination.module';
import { AspireRecordsCountModule } from '../aspire-records-count/aspire-records-count.module';
import { TableEventsService } from '../../shared/table-events.service';
import { AspireRecordsPerpageModule } from '../aspire-records-perpage/aspire-records-perpage.module';
import { AspirePopupModule } from '../aspire-popup/aspire-popup.module';

@NgModule({
  declarations: [
    AspireDatatableComponent,
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
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
