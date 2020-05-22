export interface ITableOptions {
    tableStyle?: string,
    headerStyle?: string,
    tableDiv?: string,
    tableRowStyle?: string,
    tableDataStyle?: string,
    page?: number,
    ellipses?: boolean,
    maxSize?: 1,
    directionLinks?: boolean,
    boundaryLinks?: boolean,
    sorting?: boolean,
    search?: boolean,
    dateFormat?: string,
    searchingStyle?: string,
    noRecordFoundMessage?: string,
    maxVisiblePage?: number,
    itemsPerPage?: number,
    paginationStyle?: string,
    pageItemStyle?: string,
    pageLinkStyle?: string,
    showPagination?: boolean,
    firstPageText?: string,
    prevPageText?: string,
    nextPageText?: string,
    lastPageText?: string,
    resetPagination?: boolean,
    showRecordsCount?: boolean,
    showPageSizeSelector?: boolean,
    selectRecordsPerPage?: number[]
}

export class TableOptions implements ITableOptions {
    constructor(
        public tableStyle?: string,
        public headerStyle?: string,
        public tableDiv?: string,
        public tableRowStyle?: string,
        public tableDataStyle?: string,
        public page?: number,
        public ellipses?: boolean,
        public maxSize?: 1,
        public directionLinks?: boolean,
        public boundaryLinks?: boolean,
        public sorting?: boolean,
        public search?: boolean,
        public dateFormat?: string,
        public searchingStyle?: string,
        public noRecordFoundMessage?: string,
        public maxVisiblePage?: number,
        public itemsPerPage?: number,
        public paginationStyle?: string,
        public pageItemStyle?: string,
        public pageLinkStyle?: string,
        public showPagination?: boolean,
        public firstPageText?: string,
        public prevPageText?: string,
        public nextPageText?: string,
        public lastPageText?: string,
        public resetPagination?: boolean,
        public showRecordsCount?: boolean,
        public showPageSizeSelector?: boolean,
        public selectRecordsPerPage?: number[]
    ) {
        this.tableStyle = 'table table-striped table-bordered';
        this.headerStyle = 'thead-light';
        this.tableDiv = 'table-responsive-md';
        this.tableRowStyle = '';
        this.tableDataStyle = '';
        this.page = 1;
        this.ellipses = false;
        this.maxSize = 1;
        this.directionLinks = true;
        this.boundaryLinks = true;
        this.sorting = true;
        this.search = true;
        this.dateFormat = 'dd/MM/yyyy';
        this.searchingStyle = "";
        this.noRecordFoundMessage = 'No Data Found';
        this.maxVisiblePage = 10;
        this.itemsPerPage = 10;
        this.paginationStyle = '';
        this.pageItemStyle = 'page-item';
        this.pageLinkStyle = 'page-link';
        this.showPagination = true;
        this.firstPageText = '<<';
        this.prevPageText = '<';
        this.nextPageText = '>';
        this.lastPageText = '>>';
        this.resetPagination = true;
        this.showRecordsCount = true;
        this.showPageSizeSelector = true;
        this.selectRecordsPerPage = [5, 10, 20, 30, 50];
    }
}
