import {Component} from "@angular/core";
import { Entity } from "../../../../models"; 
import { AdminService } from "../../admin.service";

import { ListBase } from "../common/list";
import { Column } from "../common/model";
import { GvFieldSplit } from "../../../../common/pipes/gvFieldSplit.pipe";

import { PaginationComponent } from "ng2-bootstrap";

@Component({
    selector: "gv-list",
    template: require("../common/list.html"),
    pipes: [GvFieldSplit],
    directives: [PaginationComponent]
}) 
export class EntityListComponent extends ListBase<Entity> {

    constructor(_adminService: AdminService<Entity>) {
        super(_adminService);
    }

    protected _initColumns(): void {
        this.columns = [
            { title: "代码", field: "code" },
            { title: "描述", field: "description" }
        ];
    }

 

    protected _addColumn(col: Column): void {
        this.columns.push(col);
    }


}