import { Component } from "@angular/core";
import { AdminService } from "../../admin.service";
import { Entity } from "../../../../models";
import { GvCard } from "../../../../layout";
import { EntityListComponent } from "../common/entitylist";
import { EntityFormComponent } from "../common/entityform";

@Component({
    selector: "gv-admin-identitytype",
    template: require("../common/cmp.html"),
    providers: [AdminService],
    directives: [GvCard, EntityFormComponent, EntityListComponent],
})
export class IdentityTypeComponent {
    title: string;
    constructor(private _adminService: AdminService<Entity>) {
        this.title = "证件类型";
        _adminService.setEntityUrl("/IdentityType");
    }
}