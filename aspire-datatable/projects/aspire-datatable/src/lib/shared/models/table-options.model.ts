export interface ITableOptions {
    tableStyle?: string,
    headerStyle?: string,
    tableDiv?: string,
    tableRowStyle?: string,
    tableDataStyle?: string,
    pageSize?: number,
    page?: number,
    ellipses?: boolean,
    maxSize?: 1,
    directionLinks?: boolean,
    boundaryLinks?: boolean,
    dateFormat?: string,
    searchingStyle?: string,
    noRecordFoundMessage?: string,
    maxVisiblePage?: number,
    itemsPerPage?: number,
    paginationStyle?: string,
    pageItemStyle?: string,
    pageLinkStyle?: string,
    firstPageText?: string,
    prevPageText?: string,
    nextPageText?: string,
    lastPageText?: string,
    resetPagination?: boolean,
    sorting?: boolean,
    showSearch?: boolean,
    showPagination?: boolean,
    showRecordsCount?: boolean,
    showPageSizeSelector?: boolean,
    noDataFoundMessage?: boolean,
    selectRecordsPerPage?: number[],
    componentsClass?: {
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
}

export class TableOptions implements ITableOptions {
    constructor(
        public tableStyle?: string,
        public headerStyle?: string,
        public tableDiv?: string,
        public tableRowStyle?: string,
        public tableDataStyle?: string,
        public pageSize?: number,
        public page?: number,
        public ellipses?: boolean,
        public maxSize?: 1,
        public directionLinks?: boolean,
        public boundaryLinks?: boolean,
        public dateFormat?: string,
        public searchingStyle?: string,
        public noRecordFoundMessage?: string,
        public maxVisiblePage?: number,
        public itemsPerPage?: number,
        public paginationStyle?: string,
        public pageItemStyle?: string,
        public pageLinkStyle?: string,
        public firstPageText?: string,
        public prevPageText?: string,
        public nextPageText?: string,
        public lastPageText?: string,
        public resetPagination?: boolean,
        public sorting?: boolean,
        public showSearch?: boolean,
        public showPagination?: boolean,
        public showRecordsCount?: boolean,
        public showPageSizeSelector?: boolean,
        public noDataFoundMessage?: boolean,
        public selectRecordsPerPage?: number[],
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
        this.tableStyle = 'table table-striped table-bordered';
        this.headerStyle = 'thead-light';
        this.tableDiv = 'table-responsive-md';
        this.tableRowStyle = '';
        this.tableDataStyle = '';
        this.pageSize = 5;
        this.page = 1;
        this.ellipses = false;
        this.maxSize = 1;
        this.directionLinks = true;
        this.boundaryLinks = true;
        this.dateFormat = 'dd/MM/yyyy';
        this.searchingStyle = "";
        this.noRecordFoundMessage = 'No Data Found';
        this.maxVisiblePage = 10;
        this.itemsPerPage = 10;
        this.paginationStyle = '';
        this.pageItemStyle = 'page-item';
        this.pageLinkStyle = 'page-link';
        this.firstPageText = '<<';
        this.prevPageText = '<';
        this.nextPageText = '>';
        this.lastPageText = '>>';
        this.resetPagination = true;
        this.sorting = true;
        this.showSearch = true;
        this.showPagination = true;
        this.showRecordsCount = true;
        this.showPageSizeSelector = true;
        this.noDataFoundMessage = true;
        this.selectRecordsPerPage = [5, 10, 20, 30, 50];
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
            },
        }
    }
}
