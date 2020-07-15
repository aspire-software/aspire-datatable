export class PageRequest {
    page: number;
    size: number;
    constructor(page: number = 1, size: number = 10) {
        this.page = page;
        this.size = size;
    }
}
