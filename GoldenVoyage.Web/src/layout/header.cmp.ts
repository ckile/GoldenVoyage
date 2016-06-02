import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router-deprecated";
@Component({
    selector: "gv-header",
    templateUrl: "tmpls/layout/header.cmp.html",
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): any {
    }
}