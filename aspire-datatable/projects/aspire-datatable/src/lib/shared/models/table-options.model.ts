import { IPaginationOptions } from './pagination-options.model';
import { IComponentsClass } from './components-class.model';

export interface ITableOptions {
    page?: number;
    itemsPerPage?: number;
    tableStyle?: string;
    headerStyle?: string;
    tableRowStyle?: string;
    tableDataStyle?: string;
    dateFormat?: string;
    searchingStyle?: string;
    noRecordFoundMessage?: string;
    showSorting?: boolean;
    resetPagination?: boolean;
    showSearch?: boolean;
    showPagination?: boolean;
    showRecordsCount?: boolean;
    showRecordsPerPageSelector?: boolean;
    recordsPerPageOptions?: number[];
    paginationOptions?: IPaginationOptions;
    componentsClass?: IComponentsClass;
}

export class TableOptions implements ITableOptions {
    constructor(
        public page?: number,
        public itemsPerPage?: number,
        public tableStyle?: string,
        public headerStyle?: string,
        public tableRowStyle?: string,
        public tableDataStyle?: string,
        public dateFormat?: string,
        public searchingStyle?: string,
        public noRecordFoundMessage?: string,
        public showSorting?: boolean,
        public resetPagination?: boolean,
        public showSearch?: boolean,
        public showPagination?: boolean,
        public showRecordsCount?: boolean,
        public showRecordsPerPageSelector?: boolean,
        public recordsPerPageOptions?: number[],
        public paginationOptions?: IPaginationOptions,
        public componentsClass?: IComponentsClass
    ) {
        this.tableStyle = this.tableStyle || 'table table-striped table-bordered';
        this.headerStyle = this.headerStyle || 'thead-light';
        this.tableRowStyle = this.tableRowStyle || '';
        this.tableDataStyle = this.tableDataStyle || '';
        this.page = this.page || 1;
        this.showSorting = this.showSorting === undefined || this.showSorting === null ? true : this.showSorting;
        this.dateFormat = this.dateFormat || 'dd/MM/yyyy';
        this.searchingStyle = this.searchingStyle || '';
        this.noRecordFoundMessage = this.noRecordFoundMessage || 'No Data Found';
        this.itemsPerPage = this.itemsPerPage || 10;
        this.showSearch = this.showSearch === undefined || this.showSearch === null ? true : this.showSearch;
        this.showPagination = this.showPagination === undefined || this.showPagination === null ? true : this.showPagination;
        this.resetPagination = this.resetPagination === undefined || this.resetPagination === null ? true : this.resetPagination;
        this.showRecordsCount = this.showRecordsCount === undefined || this.showRecordsCount === null ? true : this.showRecordsCount;
        this.showRecordsPerPageSelector = this.showRecordsPerPageSelector === undefined || this.showRecordsPerPageSelector === null
            ? true : this.showRecordsPerPageSelector;
        this.recordsPerPageOptions = this.recordsPerPageOptions || [5, 10, 20, 30, 50];
    }
}
