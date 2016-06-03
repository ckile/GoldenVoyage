import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router-deprecated";
import { RouterActive } from "../shared/directives/routeractive.directive";
@Component({
    selector: "gv-header",
    templateUrl: "tmpls/layout/header.cmp.html",
    directives: [ROUTER_DIRECTIVES, RouterActive]
})
export class HeaderComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): any {
    }
}