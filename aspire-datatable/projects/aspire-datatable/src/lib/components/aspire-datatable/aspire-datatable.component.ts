import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SortServiceService } from '../../shared/services/sort-service.service';
import * as moment from 'moment';
import { dataTypes } from '../../constants/constants';
import { PageRequest } from '../aspire-datatable/aspire-datatable.model';
import { Page } from '../aspire-pagination/aspire-pagination.model';
import { TableEventsService } from '../../shared/table-events.service';
import { AspireRecordsCountComponent } from '../aspire-records-count/aspire-records-count.component';
import { ITableOptions } from '../../shared/models/table-options.model';

@Component({
  selector: 'aspire-datatable',
  templateUrl: './aspire-datatable.component.html',
})

export class AspireDatatableComponent implements OnInit {
  @Input() headers: any[];
  @Input() records: any[];

  @Input() options: ITableOptions = { };
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPageChange: EventEmitter<PageRequest> = new EventEmitter<PageRequest>();

  public payload = new Page();
  public pageRequest = new PageRequest();
  noDataFoundMessage = false;
  start: any;
  end: any;
  selectedRecords: number;
  page: number;
  pageSize: number;
  itemsPerPage: number;

  constructor(private tableEvents: TableEventsService, private sortServiceService: SortServiceService) { }

  @ViewChild(AspireRecordsCountComponent) child: AspireRecordsCountComponent;
  ngOnInit() {
    this.filterDate();
    this.page = 1;
    this.pageSize = this.itemsPerPage;
    this.sliceRecords();
    this.tableEvents.setPage(this.page);
    console.log( )
  }

  getRowSpan() {
    return this.headers.length;
  }

  sort(item, event) {
    this.records = this.sortServiceService.sorting(item.field, this.records, event, item.type);
  }

  filterDate() {
    if (this.headers) {
      this.headers.forEach(header => {
        if (header.type === dataTypes.date) {
          this.records.forEach(element => {
            const date = moment(new Date(element.date)).format(this.options.dateFormat)
            element[header.type] = date
          });
        }
      });
    }
  }

  public getSearchRecords(value) {
    this.records = value;
  }

  public getNoDataFoundMessage(value) {
    this.noDataFoundMessage = value;
  }

  onPageChanged(event): void {
    this.page = event.currentPage;
    this.pageSize = this.itemsPerPage;
    this.options.resetPagination = true;
    this.resetPageSize();
    this.sliceRecords();
    this.tableEvents.setPage(this.page);
  }

  /* Get value from dropdown of per page record selector */
  public getPerPageRecords(value): void {
    this.pageSize = value;
    this.itemsPerPage = value;
    this.sliceRecords();
    // tslint:disable-next-line:no-unused-expression
    this.child.updateRecordCount(value); // update record count when new value selected from select pageSize options
    this.tableEvents.setPage(this.page);
  }

  /* Reset page record if someone between any pagination number access select pagesize options */
  resetPageSize() {
    this.start = 1;
    this.end = this.itemsPerPage;
  }

  /* Slice record for display per page records */
  sliceRecords() {
    this.start = (this.page - 1) * Number(this.pageSize);
    this.end = (this.page - 1) * Number(this.pageSize) + Number(this.pageSize);
  }
}