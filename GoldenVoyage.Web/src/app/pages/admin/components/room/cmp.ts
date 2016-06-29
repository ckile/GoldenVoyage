import { Component } from "@angular/core";
import { AdminService } from "../../admin.service";
import { Room } from "../../../../models";
import { GvCard } from "../../../../layout";
import { RoomListComponent } from "./list";
import { RoomFormComponent } from "./form";
@Component({
    selector: "gv-admin-room",
    template: require("../common/cmp.html"),
    providers: [AdminService],
    directives: [GvCard, RoomFormComponent, RoomListComponent],
})
export class RoomComponent {
    title: string;
    constructor(private _adminService: AdminService<Room>) {
        this.title = "房间配置";
        _adminService.setEntityUrl("/Room");
    }
}