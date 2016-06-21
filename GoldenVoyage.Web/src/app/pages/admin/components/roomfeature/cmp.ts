import { Component } from "@angular/core";
import { AdminService } from "../../admin.service";
import { Entity } from "../../../../models";
import { GvCard } from "../../../../layout";
import { ListComponent } from "./list";
import { FormComponent } from "./form";

@Component({
    selector: "gv-admin-feature",
    template: require("./cmp.html"),
    providers: [AdminService],
    directives: [GvCard, FormComponent, ListComponent],

})
export class RoomFeatureComponent {
    constructor(private _adminService: AdminService<Entity>) {
        _adminService.setEntityUrl("/RoomFeature");
    }
}