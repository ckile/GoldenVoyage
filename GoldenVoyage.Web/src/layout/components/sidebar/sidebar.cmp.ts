import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router-deprecated";
import { RouterActive } from "../directives/routeractive.directive";

import { AppStateService } from "../../services";
import { layoutSizes } from "../../layout";
@Component({
    selector: "gv-sidebar",
    template: require("./sidebar.cmp.html"),
    styles: [require("./sidebar.cmp.scss")],
    directives: [ROUTER_DIRECTIVES, RouterActive]
})
export class SidebarComponent implements OnInit {
    constructor() { }

    public ngOnInit(): void { }
}