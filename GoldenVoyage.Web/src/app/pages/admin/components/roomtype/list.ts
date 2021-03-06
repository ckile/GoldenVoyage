﻿import {Component} from "@angular/core";
import { Entity } from "../../../../models"; 
import { AdminService } from "../../admin.service";
import { EntityListComponent } from "../common/entitylist"
import { GvFieldSplit } from "../../../../common/pipes/gvFieldSplit.pipe";

@Component({
    selector: "gv-list",
    template: require("../common/list.html"),
    pipes:[GvFieldSplit]
})
export class ListComponent extends EntityListComponent {
    constructor(_adminService: AdminService<Entity>) {
        super(_adminService);
    }
}