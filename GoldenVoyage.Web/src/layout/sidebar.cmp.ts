import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router-deprecated";
import { RouterActive } from "../shared/directives/routeractive.directive";

@Component({
    selector: "gv-sidebar",
    templateUrl: "tmpls/layout/sidebar.cmp.html",
    directives: [ ROUTER_DIRECTIVES, RouterActive ]
})
export class SidebarComponent implements OnInit {


    constructor() { }

    public ngOnInit(): void { }

}