export interface IPaginationOptions {
    directionLinks?: boolean;
    ariaLabel?: string;
    ellipsis?: boolean;
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

export class PaginationOptions implements PaginationOptions {
    constructor(
        public directionLinks?: boolean,
        public ariaLabel?: string,
        public ellipsis?: boolean,
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
        this.directionLinks = this.directionLinks || true;
        this.ariaLabel = this.ariaLabel || 'Default pagination';
        this.ellipsis = this.ellipsis || false;
        this.maxVisiblePage = this.maxVisiblePage || 3;
        this.disable = this.disable || false;
        this.paginationStyle = this.paginationStyle || 'pagination justify-content-center';
        this.pageItemStyle = this.pageItemStyle || 'page-item';
        this.pageLinkStyle = this.pageLinkStyle || 'page-link';
        this.firstPageText = this.firstPageText || '<<';
        this.prevPageText = this.prevPageText || '<';
        this.nextPageText = this.nextPageText || '>';
        this.lastPageText = this.lastPageText || '>>';
    }
}