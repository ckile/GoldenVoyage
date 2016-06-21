import { Component } from "@angular/core";
import { AdminService } from "../../admin.service";
import { Entity } from "../../../../models";
import { GvCard } from "../../../../layout";
import { RoomTypeListComponent } from "./roomtypelist.cmp";
import { RoomTypeFormComponent } from "./roomtypeform.cmp";

@Component({
    selector: "gv-admin-roomtype",
    template: require("./roomtype.cmp.html"),
    providers: [AdminService],
    directives: [GvCard, RoomTypeFormComponent, RoomTypeListComponent],

})
export class RoomTypeComponent {
    constructor(private _adminService: AdminService<Entity>) {
        _adminService.setEntityUrl("/RoomType");
    }
}