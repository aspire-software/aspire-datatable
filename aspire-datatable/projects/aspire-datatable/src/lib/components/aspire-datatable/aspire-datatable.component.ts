import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ɵConsole } from '@angular/core';
import { SortServiceService } from '../../shared/services/sort-service.service';
import { dataTypes } from '../../constants/constants';
import { PageRequest } from '../aspire-datatable/aspire-datatable.model';
import { Page } from '../aspire-pagination/aspire-pagination.model';
import { TableEventsService } from '../../shared/table-events.service';
import { AspireRecordsCountComponent } from '../aspire-records-count/aspire-records-count.component';
import { ITableOptions, TableOptions } from '../../shared/models/table-options.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'aspire-datatable',
  templateUrl: './aspire-datatable.component.html',
  providers: [DatePipe]
})

export class AspireDatatableComponent implements OnInit {
  @Input() headers: any[];
  @Input() records: any[];

  @Input() options: ITableOptions = new TableOptions();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPageChange: EventEmitter<PageRequest> = new EventEmitter<PageRequest>();

  public payload = new Page();
  public pageRequest = new PageRequest();
  start: any;
  end: any;
  selectedRecords: number;

  constructor(private tableEvents: TableEventsService, private sortServiceService: SortServiceService, public datePipe: DatePipe) { }

  @ViewChild(AspireRecordsCountComponent) child: AspireRecordsCountComponent;
  ngOnInit() {
    this.filterDate();
    this.options.page = 1;
    this.tableEvents.setPage(this.options.page);
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
          const dateHeaderIndex = this.headers.indexOf(header);
          this.records.forEach(element => {
            const date = this.datePipe.transform(Object.values(element)[dateHeaderIndex], this.options.dateFormat);
            element[header.type] = date
          });
        }
      });
    }
  }

  public getSearchRecords(value) {
    this.records = value;
  }

  onPageChanged(event): void {
    this.options.page = event.currentPage;
    this.options.resetPagination = true;
    this.tableEvents.setPage(this.options.page);
  }

  /* Get value from dropdown of per page record selector */
  public getPerPageRecords(value): void {
    this.options.itemsPerPage = value;
    this.options.page = 1;
    // tslint:disable-next-line:no-unused-expression
    this.child.updateRecordCount(value); // update record count when new value selected from select pageSize options
    this.tableEvents.setPage(this.options.page);
  }

  getStart(){
    return (this.options.page - 1) * Number(this.options.itemsPerPage);
  }

  getEnd(){
    return ((this.options.page - 1) * Number(this.options.itemsPerPage)) + Number(this.options.itemsPerPage);
  }
}