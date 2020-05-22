import { Component, OnInit, Input,  Output, EventEmitter, ViewChild  } from '@angular/core';
import { SortServiceService } from '../../shared/services/sort-service.service';
import * as moment from 'moment';
import { dataTypes } from '../../constants/constants';
import { PageRequest } from '../aspire-datatable/aspire-datatable.model';
import { Page } from '../aspire-pagination/aspire-pagination.model';
import { TableEventsService } from '../../shared/table-events.service';
import { AspireRecordsCountComponent } from '../aspire-records-count/aspire-records-count.component';

@Component({
  selector: 'aspire-datatable',
  templateUrl: './aspire-datatable.component.html'
})
export class AspireDatatableComponent implements OnInit {
  @Input() headers: any[] = [];
  @Input() records: any[] = [];
  @Input() tableStyle: string = 'table table-striped table-bordered';
  @Input() headerStyle: string = 'thead-light';
  @Input() tableDiv: string = 'table-responsive-md';
  @Input() tableRowStyle: string = '';
  @Input() tableDataStyle: string = '';
  @Input() pageSize: number;
  @Input() page: number;
  @Input() ellipses: boolean;
  @Input() maxSize: number;
  @Input() directionLinks: boolean;
  @Input() boundaryLinks: boolean;
  @Input() allowSorting: boolean;
  @Input() allowSearch: boolean;
  @Input() dateFormat: string;
  @Input() searchingStyle: string = "";
  @Input() noRecordFoundMessage: string = 'No Data Found';
  @Input() maxVisiblePage: number = 10;
  @Input() itemsPerPage: number = 10;
  @Input() paginationStyle: string = '';
  @Input() pageItemStyle: string = 'page-item';
  @Input() pageLinkStyle: string = 'page-link';
  @Input() showPagination: boolean = true;
  @Input() firstPageText: any;
  @Input() prevPageText: any;
  @Input() nextPageText: any;
  @Input() lastPageText: any;
  @Input() resetPagination: boolean = false;
  @Input() showRecordsCount: boolean = true;
  @Input() showPageSizeSelector: boolean = true;
  @Input() selectRecordsPerPage: any[] = [5,10,20,30,50];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPageChange: EventEmitter<PageRequest> = new EventEmitter<PageRequest>();
  // searchForm = this.formBuilder.group({
  //   search: [null],
  // });
  noDataFoundMessage = false;
  // totalRecords = []
  // @Input() paginationClass: string = 'd-flex justify-content-end';
  // @Input() ariaLabel: string = 'Default pagination';

  public payload = new Page();
  public pageRequest = new PageRequest();
  start: any;
  end: any;
  selectedRecords: number;

  constructor(private tableEvents: TableEventsService, private sortServiceService: SortServiceService) { }

  @ViewChild(AspireRecordsCountComponent ) child: AspireRecordsCountComponent;
  ngOnInit(){
    this.filterDate();
    this.page = 1;
    this.pageSize = this.itemsPerPage;
    this.sliceRecords();
    this.tableEvents.setPage(this.page);
  }

  getRowSpan() {
    return this.headers.length;
  } 

  sort(item, event){
    this.records = this.sortServiceService.sorting(item.field,this.records,event,item.type);
  }

  filterDate() {
    if(this.headers){
      this.headers.forEach(header => {
        if(header.type === dataTypes.date){
          this.records.forEach(element => {
            const date = moment(new Date(element.date)).format(this.dateFormat)
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
    this.resetPagination = true;
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
    this.start =  (this.page - 1) * Number(this.pageSize);
    this.end = (this.page - 1) * Number(this.pageSize) + Number(this.pageSize);
  }
}