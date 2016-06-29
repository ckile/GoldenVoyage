import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable()
export class SearchService {

    search: Subject<any> = new Subject<any>();

    constructor() {

    }

    searchChanged(value: any) {
        this.search.next(value);
    }

}