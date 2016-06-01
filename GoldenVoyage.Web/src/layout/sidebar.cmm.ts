import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router-deprecated";
@Component({
    selector: "gv-sidebar",
    templateUrl: "tmpls/layout/sidebar.cmm.html",
    directives: [ ROUTER_DIRECTIVES ]
})
export class SidebarComponent implements OnInit {


    constructor() { }

    public ngOnInit(): void { }

}