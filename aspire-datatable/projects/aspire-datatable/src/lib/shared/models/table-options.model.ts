import { IPaginationOptions } from './pagination-options.model';

export interface ITableOptions {
    tableStyle?: string;
    headerStyle?: string;
    tableDiv?: string;
    tableRowStyle?: string;
    tableDataStyle?: string;
    page?: number;
    sorting?: boolean;
    search?: boolean;
    dateFormat?: string;
    searchingStyle?: string;
    noRecordFoundMessage?: string;
    itemsPerPage?: number;
    showPagination?: boolean;
    resetPagination?: boolean;
    showRecordsCount?: boolean;
    showPageSizeSelector?: boolean;
    selectRecordsPerPage?: number[];
    paginationOptions?: IPaginationOptions;
}

export class TableOptions implements ITableOptions {
    constructor(
        public tableStyle?: string,
        public headerStyle?: string,
        public tableDiv?: string,
        public tableRowStyle?: string,
        public tableDataStyle?: string,
        public page?: number,
        public sorting?: boolean,
        public search?: boolean,
        public dateFormat?: string,
        public searchingStyle?: string,
        public noRecordFoundMessage?: string,
        public itemsPerPage?: number,
        public showPagination?: boolean,
        public resetPagination?: boolean,
        public showRecordsCount?: boolean,
        public showPageSizeSelector?: boolean,
        public selectRecordsPerPage?: number[],
        public paginationOptions?: IPaginationOptions
    ) {
        this.tableStyle = this.tableStyle || 'table table-striped table-bordered';
        this.headerStyle = this.headerStyle || 'thead-light';
        this.tableDiv = this.tableDiv || 'table-responsive-md';
        this.tableRowStyle = this.tableRowStyle || '';
        this.tableDataStyle = this.tableDataStyle || '';
        this.page = this.page || 1;
        this.sorting = this.sorting || true;
        this.search = this.search || true;
        this.dateFormat = this.dateFormat || 'dd/MM/yyyy';
        this.searchingStyle = this.searchingStyle || "";
        this.noRecordFoundMessage = this.noRecordFoundMessage || 'No Data Found';
        this.itemsPerPage = this.itemsPerPage || 10;
        this.showPagination = this.showPagination || true;
        this.resetPagination = this.resetPagination || true;
        this.showRecordsCount = this.showRecordsCount || true;
        this.showPageSizeSelector = this.showPageSizeSelector || true;
        this.selectRecordsPerPage = this.selectRecordsPerPage || [5, 10, 20, 30, 50];
    }
}
