import { Component } from "@angular/core";
import { AdminService } from "../../admin.service";
import { Entity } from "../../../../models";
import { GvCard } from "../../../../layout";
import { ListComponent } from "./list";
import { FormComponent } from "./form";

@Component({
    selector: "gv-admin-feature",
    template: require("../common/cmp.html"),
    providers: [AdminService],
    directives: [GvCard, FormComponent, ListComponent],

})
export class RoomFeatureComponent {
    title: string;
    constructor(private _adminService: AdminService<Entity>) {
        this.title = "房间属性";
        _adminService.setEntityUrl("/RoomFeature");
    }
}