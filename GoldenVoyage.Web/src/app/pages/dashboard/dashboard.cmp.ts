import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { GvCard } from "../../layout";
import { PieChart } from "./pieChart";

@Component({
    selector: "gv-dashboard",
    directives: [GvCard, PieChart],
    encapsulation: ViewEncapsulation.None,
    template: require("./dashboard.cmp.html"),
    styles: [require("./dashboard.scss")],
})
export class DashboardComponent{
    constructor() {
    }

 
}