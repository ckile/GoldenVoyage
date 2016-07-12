import { Component } from "@angular/core";
import { AdminService } from "../../admin.service";
import { Hotel, HotelProfile } from "../../../../models";
import { GvCard } from "../../../../layout";
import { HotelListComponent } from "./list";
import { HotelFormComponent } from "./form";
import { DynamicFormComponent } from "../../../../common/components/dynamic-form";
import { ControlsService } from "../../controls.service";

@Component({
    selector: "gv-admin-hotel",
    template: require("./cmp.html"),
    providers: [AdminService, ControlsService],
    directives: [GvCard, HotelFormComponent, HotelListComponent, DynamicFormComponent],
})
export class HotelComponent {
    controls: any;
    title: string;
    constructor(private _adminService: AdminService<Hotel>, _cs: ControlsService) {
        this.title = "酒店配置";
        _adminService.setEntityUrl("/Hotel");
        this.controls = _cs.getHotelControls();
        console.log(this.controls);
    }
}