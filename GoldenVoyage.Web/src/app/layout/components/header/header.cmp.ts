﻿import { Component, OnInit, ViewEncapsulation } from "@angular/core"; 
import { AppState } from "../../../app.state";
import { GvScrollPosition } from "../../directives";
import { UserInfoComponent } from "../userinfo";
import { SearchComponent } from "../gvSearch/gvSearch";
@Component({
    selector: "gv-header",
    styles: [require("./header.cmp.scss")],
    template: require("./header.cmp.html"),
    directives: [GvScrollPosition, UserInfoComponent,  SearchComponent],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

    public isScrolled: boolean = false;
    public isMenuCollapsed: boolean = false;

    constructor(private _state: AppState) {
        this._state.subscribe("menu.isCollapsed", (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }

    ngOnInit(): any {
    }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    }

    public scrolledChanged(isScrolled) {
        this.isScrolled = isScrolled;
    }

}