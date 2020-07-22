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
  startPageNumber: number = 1;

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
    if (this.resetPagination) this.initPagination();
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
    this.pageModel = new Page(this.startPageNumber, 1, this.validateMaxSize() - 1);
    this.setPages();
  }

  setPages(): void {
    this.pages = [];
    for (let i = this.pageModel.firstPage; i <= this.pageModel.lastPage && i <= this.totalPages; i++) {
      if (i !== this.startPageNumber && i !== this.totalPages) {
        this.pages.push(i);
      }
    }
  }

  onPageClick(page: number): void {
    this.pageModel.currentPage = page;

    const median = Math.ceil(this.validateMaxSize() / 2) - 1;
    let min = this.pageModel.currentPage - median;
    let max = this.pageModel.currentPage + median - 1;

    if (min < 2) {
      min = 2;
      max = this.validateMaxSize() - 1;
    } else if (max >= this.totalPages) {
      max = this.totalPages;
      min = (this.totalPages - this.validateMaxSize()) + 2;
    } else if (this.totalPages > this.options.maxVisiblePage) {
      min = min + 1;
    }

    this.pageModel.firstPage = min;
    this.pageModel.lastPage = max;

    this.onPageChanged.next(this.pageModel);
    this.setPages();
  }

  validateMaxSize(): number {
    return this.options.maxVisiblePage > this.totalPages ? this.totalPages : this.options.maxVisiblePage;
  }

  disablePagination(flag: number = 0): boolean {
    debugger;
    if (this.totalItems <= 0 || this.options.disable || (flag === 1 && this.pageModel.currentPage === 1)
      || (flag === 2 && this.pageModel.currentPage === this.totalPages)) {
      return true;
    }
    return false;
  }

  cancelEvent(event) {
    event.preventDefault();
  }
}
