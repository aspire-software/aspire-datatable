import { IPaginationOptions } from './pagination-options.model';

export interface ITableOptions {
    pageSize?: number;
    maxSize?: 1;
    page?: number;
    itemsPerPage?: number;
    tableStyle?: string;
    headerStyle?: string;
    tableDiv?: string;
    tableRowStyle?: string;
    tableDataStyle?: string;
    dateFormat?: string;
    searchingStyle?: string;
    noRecordFoundMessage?: string;
    sorting?: boolean;
    resetPagination?: boolean;
    showSearch?: boolean;
    showPagination?: boolean;
    showRecordsCount?: boolean;
    showPageSizeSelector?: boolean;
    boundaryLinks?: boolean;
    noDataFoundMessage?: boolean;
    selectRecordsPerPage?: number[];
    paginationOptions?: IPaginationOptions;
    componentsClass?: {
        search?: {
            position?: string;
            classList?: string;
        },
        pagination?: {
            position?: string;
            classList?: string;
        },
        recordsCount?: {
            position?: string;
            classList?: string;
        },
        recordsPerPage?: {
            position?: string;
            classList?: string;
        },
    }
}

export class TableOptions implements ITableOptions {
    constructor(
        public pageSize?: number,
        public maxSize?: 1,
        public page?: number,
        public itemsPerPage?: number,
        public tableStyle?: string,
        public headerStyle?: string,
        public tableDiv?: string,
        public tableRowStyle?: string,
        public tableDataStyle?: string,
        public dateFormat?: string,
        public searchingStyle?: string,
        public noRecordFoundMessage?: string,
        public sorting?: boolean,
        public resetPagination?: boolean,
        public showSearch?: boolean,
        public showPagination?: boolean,
        public showRecordsCount?: boolean,
        public showPageSizeSelector?: boolean,
        public boundaryLinks?: boolean,
        public noDataFoundMessage?: boolean,
        public selectRecordsPerPage?: number[],
        public paginationOptions?: IPaginationOptions,
        public componentsClass?: {
            search?: {
                position?: string,
                classList?: string
            },
            pagination?: {
                position?: string,
                classList?: string
            },
            recordsCount?: {
                position?: string,
                classList?: string
            },
            recordsPerPage?: {
                position?: string,
                classList?: string
            },
        }
    ) {
        this.tableStyle = this.tableStyle || 'table table-striped table-bordered';
        this.headerStyle = this.headerStyle || 'thead-light';
        this.tableDiv = this.tableDiv || 'table-responsive-md';
        this.tableRowStyle = this.tableRowStyle || '';
        this.tableDataStyle = this.tableDataStyle || '';
        this.page = this.page || 1;
        this.sorting = this.sorting || true;
        this.dateFormat = this.dateFormat || 'dd/MM/yyyy';
        this.searchingStyle = this.searchingStyle || "";
        this.noRecordFoundMessage = this.noRecordFoundMessage || 'No Data Found';
        this.itemsPerPage = this.itemsPerPage || 10;
        this.showSearch = this.showSearch || true;
        this.showPagination = this.showPagination || true;
        this.resetPagination = this.resetPagination || true;
        this.showRecordsCount = this.showRecordsCount || true;
        this.showPageSizeSelector = this.showPageSizeSelector || true;
        this.noDataFoundMessage = this.noDataFoundMessage || true;
        this.boundaryLinks = this.boundaryLinks || true;
        this.pageSize = this.pageSize || 5;
        this.maxSize = this.maxSize || 1;
        this.selectRecordsPerPage = this.selectRecordsPerPage || [5, 10, 20, 30, 50];
        this.componentsClass = {
            search: {
                position: "top",
                classList: "right"
            },
            pagination: {
                position: "bottom",
                classList: "right"
            },
            recordsCount: {
                position: "bottom",
                classList: "left"
            },
            recordsPerPage: {
                position: "top",
                classList: "left"
            }
        }
    }
}
