export interface IPaginationOptions {
    ariaLabel?: string;
    maxVisiblePage?: number;
    disable?: boolean;
    paginationStyle?: string;
    pageItemStyle?: string;
    pageLinkStyle?: string;
    firstPageText?: string;
    prevPageText?: string;
    nextPageText?: string;
    lastPageText?: string;
}

export class PaginationOptions implements IPaginationOptions {
    constructor(
        public ariaLabel?: string,
        public maxVisiblePage?: number,
        public disable?: boolean,
        public paginationStyle?: string,
        public pageItemStyle?: string,
        public pageLinkStyle?: string,
        public firstPageText?: string,
        public prevPageText?: string,
        public nextPageText?: string,
        public lastPageText?: string
    ) {
        this.ariaLabel = this.ariaLabel || 'Default pagination';
        this.maxVisiblePage = 5;
        this.disable = this.disable === undefined || this.disable === null ? false : this.disable;
        this.paginationStyle = this.paginationStyle || 'pagination justify-content-center';
        this.pageItemStyle = this.pageItemStyle || 'page-item';
        this.pageLinkStyle = this.pageLinkStyle || 'page-link';
        this.firstPageText = this.firstPageText || '<<';
        this.prevPageText = this.prevPageText || '<';
        this.nextPageText = this.nextPageText || '>';
        this.lastPageText = this.lastPageText || '>>';
    }
}
