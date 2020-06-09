import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { TableEventsService } from '../../shared/table-events.service';
import { AspireRecordsCountComponent } from '../aspire-records-count/aspire-records-count.component';
import { ITableOptions, TableOptions } from '../../shared/models/table-options.model';
import { PaginationOptions } from '../../shared/models/pagination-options.model';
import { ComponentsClass } from '../../shared/models/components-class.model';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'aspire-datatable',
  templateUrl: './aspire-datatable.component.html',
  styleUrls: ['./aspire-datatable.component.css']
})

export class AspireDatatableComponent implements OnInit, AfterViewInit {
  @Input() headers: any[];
  @Input() records: any[];
  @Input() options: ITableOptions = new TableOptions();
  @Input() popup: any;
  @Output() confirmUserDelete = new EventEmitter();
  isPageLoad: boolean;

  constructor(private tableEvents: TableEventsService,
    private router: Router) { }

  @ViewChild(AspireRecordsCountComponent) child: AspireRecordsCountComponent;

  ngOnInit(): void {
    this.options = new TableOptions(
      this.options.page,
      this.options.itemsPerPage,
      this.options.tableStyle,
      this.options.headerStyle,
      this.options.tableRowStyle,
      this.options.tableDataStyle,
      this.options.dateFormat,
      this.options.searchingStyle,
      this.options.noRecordFoundMessage,
      this.options.showSorting,
      this.options.resetPagination,
      this.options.showSearch,
      this.options.showPagination,
      this.options.showRecordsCount,
      this.options.showRecordsPerPageSelector,
      this.options.recordsPerPageOptions,
      this.options.paginationOptions ? new PaginationOptions(
        this.options.paginationOptions.ariaLabel,
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
    // if page size selector and pagination is disabled then it will display all records on single page
    if ((!this.options.showRecordsPerPageSelector && !this.options.showPagination) || this.options.paginationOptions.disable) {
      this.options.itemsPerPage = this.records.length;
    }
    this.options.page = 1;
    this.tableEvents.setPage(this.options.page);
    this.isPageLoad = true;
  }

  public ngAfterViewInit(): void {
    if (this.child) {
      this.child.updatedTotalCounts(this.records.length);
      this.child.updateRecordCount(this.options.itemsPerPage);
    }
    this.isPageLoad = false;
  }

  getRowSpan(): number {
    return this.headers.length;
  }

  sort(item: any, event: any): void {
    this.records = this.tableEvents.sorting(item.field, this.records, event, item.type);
  }

  public getSearchRecords(value: any): void {
    if (!this.isPageLoad) { this.records = value; }
    if (this.child) { this.child.updatedTotalCounts(this.records.length); }
    this.onPageChanged(null);
  }

  onPageChanged(event: any): void {
    this.options.page = event ? event.currentPage : 1;
    this.options.resetPagination = true;
    this.tableEvents.setPage(this.options.page);
  }
  onConfirmDelete(event: any) {
    this.confirmUserDelete.emit(event);
  }
  /* Get value from dropdown of per page record selector */
  public getPerPageRecords(value: any): void {
    if (value) { this.options.itemsPerPage = Number(value); }
    this.options.page = 1;
    if (this.child) {
      // update record count when new value selected from select page size options
      this.child.updateRecordCount(this.options.itemsPerPage);
    }
    this.tableEvents.setPage(this.options.page);
  }

  getStart(): number {
    return (this.options.page - 1) * Number(this.options.itemsPerPage);
  }

  getEnd(): number {
    return ((this.options.page - 1) * Number(this.options.itemsPerPage)) + Number(this.options.itemsPerPage);
  }

}
