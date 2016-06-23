import { Component } from "@angular/core"; 
import { AdminService } from "../../admin.service";
import { Hotel, HotelProfile } from "../../../../models";
import { GvCard } from "../../../../layout";
import { HotelListComponent } from "./list";
import { HotelFormComponent } from "./form";

@Component({
    selector: "gv-admin-hotel",
    template: require("../common/cmp.html"),
    providers: [AdminService],
    directives: [GvCard, HotelFormComponent, HotelListComponent],
    
})
export class HotelComponent {
    title: string;
    constructor(private _adminService: AdminService<Hotel>) {
        this.title = "酒店配置";
        _adminService.setEntityUrl("/Hotel");
    }
}