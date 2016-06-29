import { Component } from "@angular/core";
import { SearchService } from "../../../services";
@Component({
    selector: "gv-search",
    template: require("./search.html"),
})
export class SearchComponent {

    searchText: string;

    constructor(private _searchService: SearchService) {
    }

    startSearch(e: any) {
        this._searchService.searchChanged(this.searchText);
    }

}