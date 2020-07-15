import { Component, OnInit, Input, Output } from '@angular/core';
import { Page } from '../../shared/models/aspire-pagination.model';
import { PaginationOptions, IPaginationOptions } from '../../shared/models/pagination-options.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'aspire-pagination',
  templateUrl: './aspire-pagination.component.html',
  styleUrls: ['./aspire-pagination.component.css']
})

export class AspirePaginationComponent implements OnInit {
  pageModel: Page;
  pages: number[] = [];
  totalPages: number;

  @Input() options: IPaginationOptions = new PaginationOptions();

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

  private onPageChanged = new BehaviorSubject(this.pageModel);
  @Output() pageChanged = this.onPageChanged.asObservable();

  constructor() { }

  ngOnInit(): void {
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

    this.onPageChanged.next(this.pageModel);
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

    this.onPageChanged.next(this.pageModel);
    this.setPages();
  }

  onNextPageClick(nextPage: number): void {
    if (nextPage > this.totalPages) {
      return;
    }

    this.pageModel.currentPage = nextPage;

    let min = this.pageModel.firstPage;
    let max = (this.pageModel.firstPage + this.validateMaxSize()) - 1;

    if (this.pageModel.currentPage <= this.options.maxVisiblePage) {
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

    this.onPageChanged.next(this.pageModel);
    this.setPages();
  }

  onFirstOrLastPageClick(isFirst: boolean): void {
    this.pageModel.currentPage = isFirst ? 1 : this.totalPages;
    this.pageModel.firstPage = isFirst ? this.pageModel.currentPage : ((this.pageModel.currentPage - this.validateMaxSize()) + 1);
    this.pageModel.lastPage = isFirst ? ((this.pageModel.firstPage + this.validateMaxSize()) - 1) : this.pageModel.currentPage;
    this.onPageChanged.next(this.pageModel);
    this.setPages();
  }

  validateMaxSize(): number {
    return this.options.maxVisiblePage > this.totalPages ? this.totalPages : this.options.maxVisiblePage;
  }

  disablePagination(flag: number = 0): boolean {
    switch (flag) {
      case 1: return this.totalItems <= 0 || this.pageModel.currentPage === 1 || this.options.disable;
      case 2: return this.totalItems <= 0 || this.pageModel.currentPage === this.totalPages || this.options.disable;
      default: return this.options.disable;
    }
  }

  cancelEvent(event) {
    event.preventDefault();
  }
}
