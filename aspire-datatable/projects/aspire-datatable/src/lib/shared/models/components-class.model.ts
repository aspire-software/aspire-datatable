export interface IComponentsClass {
    topBlankComponentClassList?: string;
    bottomBlankComponentClassList?: string;
    search?: ICommonProperty,
    pagination?: ICommonProperty,
    recordsCount?: ICommonProperty,
    recordsPerPage?: ICommonProperty
}

export class ComponentsClass implements IComponentsClass {
    constructor(
        public topBlankComponentClassList?: string,
        public bottomBlankComponentClassList?: string,
        public search?: ICommonProperty,
        public pagination?: ICommonProperty,
        public recordsCount?: ICommonProperty,
        public recordsPerPage?: ICommonProperty
    ) {
        this.topBlankComponentClassList = this.topBlankComponentClassList || "col-md-4 col-sm-12";
        this.bottomBlankComponentClassList = this.bottomBlankComponentClassList || "col-md-4 col-sm-12";
        this.search =
            new CommonProperty(
                this.search && this.search.position ? this.search.position : "top-right",
                this.search && this.search.classList ? this.search.classList : "col-md-6 col-sm-6 mb-2 mb-sm-0",
                this.search && this.search.componentClassList ? this.search.componentClassList : "justify-right");
        this.pagination =
            new CommonProperty(
                this.pagination && this.pagination.position ? this.pagination.position : "bottom-right",
                this.pagination && this.pagination.classList ? this.pagination.classList : "col-md-8 col-sm-8 mt-2 mt-sm-0",
                this.pagination && this.pagination.componentClassList ? this.pagination.componentClassList : "justify-right justify-center-center");
        this.recordsCount =
            new CommonProperty(
                this.recordsCount && this.recordsCount.position ? this.recordsCount.position : "bottom-left",
                this.recordsCount && this.recordsCount.classList ? this.recordsCount.classList : "col-md-4 col-sm-4 mt-2 mt-sm-0",
                this.recordsCount && this.recordsCount.componentClassList ? this.recordsCount.componentClassList : "justify-center-center");
        this.recordsPerPage =
            new CommonProperty(
                this.recordsPerPage && this.recordsPerPage.position ? this.recordsPerPage.position : "top-left",
                this.recordsPerPage && this.recordsPerPage.classList ? this.recordsPerPage.classList : "col-md-6 col-sm-6",
                this.recordsPerPage && this.recordsPerPage.componentClassList ? this.recordsPerPage.componentClassList : "itemsPerPage");
    }
}

export class ICommonProperty {
    position?: string;
    classList?: string;
    componentClassList?: string;
}

export class CommonProperty implements ICommonProperty {
    constructor(
        public position?: string,
        public classList?: string,
        public componentClassList?: string
    ) { }
}