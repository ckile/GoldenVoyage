﻿import {Component} from "@angular/core";
import { Room } from "../../../../models";
import { GvFieldSplit } from "../../../../common/pipes/gvFieldSplit.pipe";
import { AdminService } from "../../admin.service";
import { ListBase } from "../common/list";
import { PaginationComponent } from "ng2-bootstrap";

@Component({
    selector: "gv-list",
    template: require("../common/list.html") + require("./list.html"),
    pipes: [GvFieldSplit],
    directives:[PaginationComponent]
})
export class RoomListComponent extends ListBase<Room> {

    constructor(_adminService: AdminService<Room>) {
        super(_adminService);
    }

    protected _initColumns(): void {
        this.columns = [
            { title: "房号", field: "code" },
            { title: "房间类型", field: "type.description" },
            { title: "酒店", field: "hotel.name" },
            { title: "楼层", field: "floor" },
            { title: "床位数", field: "beds" },
        ];
    }

 
}