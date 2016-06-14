import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router-deprecated";
import { AppStateService } from "../../services/appstate.service";
@Component({
    selector: "gv-header",
    template: require("./header.cmp.html"),
    styles: [require("./header.cmp.scss")],
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): any {
    }
}