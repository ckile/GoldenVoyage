import {Component} from "@angular/core";
import { Entity } from "../../../../models"; 
import { AdminService } from "../../admin.service";

import { ListBase } from "../common/list";

import { GvFieldSplit } from "../../../../common/pipes/gvFieldSplit.pipe";

@Component({
    selector: "gv-list",
    template: require("../common/list.html"),
    pipes: [GvFieldSplit]
}) 
export class EntityListComponent extends ListBase<Entity> {

    constructor(_adminService: AdminService<Entity>) {
        super(_adminService);
    }

    protected _initColumns(): void {
        this.columns = [
            { title: "代码", field: "Code" },
            { title: "描述", field: "Description" }
        ];
    }

}