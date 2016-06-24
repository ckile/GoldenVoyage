import { Component } from "@angular/core";
import { AdminService } from "../../admin.service";
import { Entity } from "../../../../models";
import { GvCard } from "../../../../layout";
import { EntityListComponent } from "../common/entitylist";
import { EntityFormComponent } from "../common/entityform";

@Component({
    selector: "gv-admin-guesttitle",
    template: require("../common/cmp.html"),
    providers: [AdminService],
    directives: [GvCard, EntityFormComponent, EntityListComponent],
})
export class GuestTitleComponent {
    title: string;
    constructor(private _adminService: AdminService<Entity>) {
        this.title = "称谓";
        _adminService.setEntityUrl("/GuestTitle");
    }
}