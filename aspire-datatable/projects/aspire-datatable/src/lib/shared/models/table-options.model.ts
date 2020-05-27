import { IPaginationOptions } from './pagination-options.model';
import { IComponentsClass } from './components-class.model';

export interface ITableOptions {
    pageSize?: number;
    page?: number;
    itemsPerPage?: number;
    tableStyle?: string;
    headerStyle?: string;
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
    noDataFoundMessage?: boolean;
    selectRecordsPerPage?: number[];
    paginationOptions?: IPaginationOptions;
    componentsClass?: IComponentsClass;
}

export class TableOptions implements ITableOptions {
    constructor(
        public pageSize?: number,
        public page?: number,
        public itemsPerPage?: number,
        public tableStyle?: string,
        public headerStyle?: string,
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
        public noDataFoundMessage?: boolean,
        public selectRecordsPerPage?: number[],
        public paginationOptions?: IPaginationOptions,
        public componentsClass?: IComponentsClass
    ) {
        this.tableStyle = this.tableStyle || 'table table-striped table-bordered';
        this.headerStyle = this.headerStyle || 'thead-light';
        this.tableRowStyle = this.tableRowStyle || '';
        this.tableDataStyle = this.tableDataStyle || '';
        this.page = this.page || 1;
        this.sorting = this.sorting === undefined || this.sorting === null ? true : this.sorting;
        this.dateFormat = this.dateFormat || 'dd/MM/yyyy';
        this.searchingStyle = this.searchingStyle || "";
        this.noRecordFoundMessage = this.noRecordFoundMessage || 'No Data Found';
        this.itemsPerPage = this.itemsPerPage || 10;
        this.showSearch = this.showSearch === undefined || this.showSearch === null ? true : this.showSearch;
        this.showPagination = this.showPagination === undefined || this.showPagination === null ? true : this.showPagination;
        this.resetPagination = this.resetPagination === undefined || this.resetPagination === null ? true : this.resetPagination;
        this.showRecordsCount = this.showRecordsCount === undefined || this.showRecordsCount === null ? true : this.showRecordsCount;
        this.showPageSizeSelector = this.showPageSizeSelector === undefined || this.showPageSizeSelector === null ? true : this.showPageSizeSelector;
        this.noDataFoundMessage = this.noDataFoundMessage === undefined || this.noDataFoundMessage === null ? true : this.noDataFoundMessage;
        this.pageSize = this.pageSize || 5;
        this.selectRecordsPerPage = this.selectRecordsPerPage || [5, 10, 20, 30, 50];
    }
}
