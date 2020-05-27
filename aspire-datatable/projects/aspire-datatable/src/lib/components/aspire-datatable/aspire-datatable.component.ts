import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TableEventsService } from '../../shared/table-events.service';
import { AspireRecordsCountComponent } from '../aspire-records-count/aspire-records-count.component';
import { ITableOptions, TableOptions } from '../../shared/models/table-options.model';
import { PageRequest } from '../../shared/models/aspire-datatable.model';
import { PaginationOptions } from '../../shared/models/pagination-options.model';
import { ComponentsClass } from '../../shared/models/components-class.model';

@Component({
  selector: 'aspire-datatable',
  templateUrl: './aspire-datatable.component.html',
  styleUrls: ['./aspire-datatable.component.css']
})

export class AspireDatatableComponent implements OnInit, AfterViewInit {
  @Input() headers: any[];
  @Input() records: any[];
  @Input() options: ITableOptions = new TableOptions();
  isPageLoad: boolean;

  public pageRequest = new PageRequest();

  constructor(private tableEvents: TableEventsService) { }

  @ViewChild(AspireRecordsCountComponent) child: AspireRecordsCountComponent;

  ngOnInit() {
    this.options = new TableOptions(
      this.options.pageSize,
      this.options.maxSize,
      this.options.page,
      this.options.itemsPerPage,
      this.options.tableStyle,
      this.options.headerStyle,
      this.options.tableDiv,
      this.options.tableRowStyle,
      this.options.tableDataStyle,
      this.options.dateFormat,
      this.options.searchingStyle,
      this.options.noRecordFoundMessage,
      this.options.sorting,
      this.options.resetPagination,
      this.options.showSearch,
      this.options.showPagination,
      this.options.showRecordsCount,
      this.options.showPageSizeSelector,
      this.options.boundaryLinks,
      this.options.noDataFoundMessage,
      this.options.selectRecordsPerPage,
      this.options.paginationOptions ? new PaginationOptions(
        this.options.paginationOptions.directionLinks,
        this.options.paginationOptions.ariaLabel,
        this.options.paginationOptions.ellipsis,
        this.options.paginationOptions.maxVisiblePage,
        this.options.paginationOptions.disable,
        this.options.paginationOptions.paginationStyle,
        this.options.paginationOptions.pageItemStyle,
        this.options.paginationOptions.pageLinkStyle,
        this.options.paginationOptions.firstPageText,
        this.options.paginationOptions.prevPageText,
        this.options.paginationOptions.nextPageText,
        this.options.paginationOptions.lastPageText
      ) : new PaginationOptions(),
      this.options.componentsClass ? new ComponentsClass(
        this.options.componentsClass.topBlankComponentClassList,
        this.options.componentsClass.bottomBlankComponentClassList,
        this.options.componentsClass.search,
        this.options.componentsClass.pagination,
        this.options.componentsClass.recordsCount,
        this.options.componentsClass.recordsPerPage
      ) : new ComponentsClass()
    );
    this.options.page = 1;
    this.tableEvents.setPage(this.options.page);
    this.isPageLoad = true;
  }

  public ngAfterViewInit(): void {
    this.child.updatedTotalCounts(this.records.length);
    this.child.updateRecordCount(this.options.itemsPerPage);
    this.isPageLoad = false;
  }

  getRowSpan() {
    return this.headers.length;
  }

  sort(item, event) {
    this.records = this.tableEvents.sorting(item.field, this.records, event, item.type);
  }

  public getSearchRecords(value) {
    if (!this.isPageLoad) this.records = value;
    if (this.child) this.child.updatedTotalCounts(this.records.length);
    this.onPageChanged(null);
  }

  onPageChanged(event): void {
    this.options.page = event ? event.currentPage : 1;
    this.options.resetPagination = true;
    this.tableEvents.setPage(this.options.page);
  }

  /* Get value from dropdown of per page record selector */
  public getPerPageRecords(value): void {
    if (value) this.options.itemsPerPage = Number(value);
    this.options.page = 1;
    // tslint:disable-next-line:no-unused-expression
    if (this.child) this.child.updateRecordCount(this.options.itemsPerPage); // update record count when new value selected from select pageSize options
    this.tableEvents.setPage(this.options.page);
  }

  getStart() {
    return (this.options.page - 1) * Number(this.options.itemsPerPage);
  }

  getEnd() {
    return ((this.options.page - 1) * Number(this.options.itemsPerPage)) + Number(this.options.itemsPerPage);
  }

}
