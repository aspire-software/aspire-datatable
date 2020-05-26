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
        topBlankComponentClassList?: string;
        bottomBlankComponentClassList?: string;
        search?: {
            position?: string;
            classList?: string;
            componentClassList?: string;
        },
        pagination?: {
            position?: string;
            classList?: string;
            componentClassList?: string;
        },
        recordsCount?: {
            position?: string;
            classList?: string;
            componentClassList?: string;
        },
        recordsPerPage?: {
            position?: string;
            classList?: string;
            componentClassList?: string;
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
            topBlankComponentClassList?: string,
            bottomBlankComponentClassList?: string,
            search?: {
                position?: string,
                classList?: string,
                componentClassList?: string
            },
            pagination?: {
                position?: string,
                classList?: string,
                componentClassList?: string
            },
            recordsCount?: {
                position?: string,
                classList?: string,
                componentClassList?: string
            },
            recordsPerPage?: {
                position?: string,
                classList?: string,
                componentClassList?: string
            }
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
            topBlankComponentClassList: "col-md-4 col-sm-12",
            bottomBlankComponentClassList: "col-md-4 col-sm-12",
            pagination: {
                position: "bottom-right",
                classList: "col-md-8 col-sm-8 mt-2 mt-sm-0",
                componentClassList: "justify-right justify-center-center"
            },
            recordsCount: {
                position: "bottom-left",
                classList: "col-md-4 col-sm-4 mt-2 mt-sm-0",
                componentClassList: "justify-center-center"
            },
            search: {
                position: "top-right",
                classList: "col-md-6 col-sm-6 mb-2 mb-sm-0",
                componentClassList: "justify-right"
            },
            recordsPerPage: {
                position: "top-left",
                classList: "col-md-6 col-sm-6",
                componentClassList: "itemsPerPage"
            }
        }
    }
}
