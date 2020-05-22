import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from './aspire-pagination.model';

@Component({
  selector: 'aspire-pagination',
  templateUrl: './aspire-pagination.component.html',
  styleUrls: ['./aspire-pagination.component.css']
})

export class AspirePaginationComponent implements OnInit {
  pageModel: Page;
  pages: number[] = [];
  totalPages: number;
  
  @Input() directionLinks: boolean = true;
  @Input() ariaLabel: string = 'Default pagination';
  @Input() ellipsis: boolean = false;
  @Input() maxVisiblePage: number = 3;
  @Input() disable: boolean = false;
  @Input() paginationStyle: string = 'pagination justify-content-center';
  @Input() pageItemStyle: string = 'page-item';
  @Input() pageLinkStyle: string = 'page-link';
  @Input() firstPageText: string;
  @Input() prevPageText: string;
  @Input() nextPageText: string;
  @Input() lastPageText: string;

  totalRecords: number = 0;
  @Input()
  set totalItems(val: number) {
    this.totalRecords = val;
    this.initPagination();
  }

  get totalItems(): number {
    return this.totalRecords;
  }

  recordsPerPage: number = 10;
  @Input()
  set itemsPerPage(val: number) {
    this.recordsPerPage = val;
    this.initPagination();
  }

  get itemsPerPage(): number {
    return this.recordsPerPage;
  }

  resetPagination: boolean = false;
  @Input()
  set reset(val: boolean) {
    this.resetPagination = val;
    if (this.resetPagination) {
      this.initPagination();
    }
  }

  get reset(): boolean {
    return this.resetPagination;
  }

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onPageChanged: EventEmitter<Page> = new EventEmitter<Page>();

  constructor() { }

  ngOnInit() {
    this.initPagination();
  }

  initPagination(): void {
    this.pages = [];
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pageModel = new Page(1, 1, this.validateMaxSize());
    this.setPages();
  }

  setPages(): void {
    this.pages = [];
    for (let i = this.pageModel.firstPage; i <= this.pageModel.lastPage && i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  onPageClick(page: number): void {
    this.pageModel.currentPage = page;

    const median = Math.ceil(this.validateMaxSize() / 2) - 1;
    let min = this.pageModel.currentPage - median;
    let max = this.pageModel.currentPage + median + 1;

    if (min < 1) {
      min = 1;
      max = this.validateMaxSize();
    }
    else if (max > this.totalPages) {
      max = this.totalPages;
      min = (this.totalPages - this.validateMaxSize()) + 1;
    }

    this.pageModel.firstPage = min;
    this.pageModel.lastPage = max;

    this.onPageChanged.emit(this.pageModel);
    this.setPages();
  }

  onPreviousPageClick(prevPage: number): void {

    if (prevPage < 1) {
      return;
    }

    this.pageModel.currentPage = prevPage;

    let max = this.pageModel.lastPage;
    let min = (this.pageModel.currentPage - this.validateMaxSize()) + (max - this.pageModel.currentPage) + 1;

    if (this.pageModel.firstPage > this.pageModel.currentPage) {
      min = this.pageModel.currentPage;
      max = (this.pageModel.currentPage + this.validateMaxSize()) - 1;
      this.pageModel.firstPage = min;
      this.pageModel.lastPage = max;
    }

    this.pageModel.firstPage = min;
    this.pageModel.lastPage = max;

    this.onPageChanged.emit(this.pageModel);
    this.setPages();
  }

  onNextPageClick(nextPage: number): void {

    if (nextPage > this.totalPages) {
      return;
    }

    this.pageModel.currentPage = nextPage;

    let min = this.pageModel.firstPage;
    let max = (this.pageModel.firstPage + this.validateMaxSize()) - 1;

    if (this.pageModel.currentPage <= this.maxVisiblePage) {
      min = 1;
      max = this.validateMaxSize();
    }
    else if (max >= this.totalPages) {
      min = (this.totalPages - this.validateMaxSize()) + 1;
      max = this.totalPages;
    }
    else {
      min = (this.pageModel.currentPage - this.validateMaxSize()) + 1;
      max = this.pageModel.currentPage;
    }

    this.pageModel.firstPage = min;
    this.pageModel.lastPage = max;

    this.onPageChanged.emit(this.pageModel);
    this.setPages();
  }

  onFirstPageClick(): void {
    this.pageModel.currentPage = 1;
    this.pageModel.firstPage = this.pageModel.currentPage;
    this.pageModel.lastPage = (this.pageModel.firstPage + this.validateMaxSize()) - 1;
    this.onPageChanged.emit(this.pageModel);
    this.setPages();
  }

  onLastPageClick(): void {
    this.pageModel.currentPage = this.totalPages;
    this.pageModel.firstPage = (this.pageModel.currentPage - this.validateMaxSize()) + 1;
    this.pageModel.lastPage = this.pageModel.currentPage;
    this.onPageChanged.emit(this.pageModel);
    this.setPages();
  }

  validateMaxSize(): number {
    return this.maxVisiblePage > this.totalPages ? this.totalPages : this.maxVisiblePage;
  }

  disablePagination(flag: number = 0): boolean {
    switch (flag) {
      case 1: return this.totalItems <= 0 || this.pageModel.currentPage === 1 || this.disable;
      case 2: return this.totalItems <= 0 || this.pageModel.currentPage === this.totalPages || this.disable;
      default: return this.disable;
    }
  }

  cancelEvent(event) {
    event.preventDefault();
  }
}