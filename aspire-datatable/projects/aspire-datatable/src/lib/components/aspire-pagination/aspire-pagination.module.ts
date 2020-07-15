import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspirePaginationComponent } from '../aspire-pagination/aspire-pagination.component';
import { TableEventsService } from '../../shared/table-events.service';

@NgModule({
  declarations: [AspirePaginationComponent],
  imports: [CommonModule],
  exports: [AspirePaginationComponent],
  providers: [TableEventsService]
})
export class AspirePaginationModule { }
