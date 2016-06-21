export class PaginateParamter {
    draw: number;
    start: number;
    length: number; 
    search: PaginateSearch;
    searchText: string;
    order: Array<PaginateOrder>; 

    constructor() {
        this.search = new PaginateSearch();
        this.order = new Array<PaginateOrder>();
    }

}

export class PaginateSearch {
    value: string;
    regex: boolean;
}

export class PaginateOrder {
    column: string;
    dir: string;  // asc   or   desc
}