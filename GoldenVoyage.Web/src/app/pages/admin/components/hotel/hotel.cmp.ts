import { Component } from "@angular/core"; 
import { AdminService } from "../../admin.service";
import { Hotel, HotelProfile } from "../../../../models";
import { GvCard } from "../../../../layout";
import { HotelListComponent } from "./hotellist.cmp";
import { HotelFormComponent } from "./hotelform.cmp";

@Component({
    selector: "gv-admin-hotel",
    template: require("./hotel.cmp.html"),
    providers: [AdminService],
    directives: [GvCard, HotelFormComponent, HotelListComponent],
    
})
export class HotelComponent {
     constructor(private _adminService: AdminService<Hotel>) {
        _adminService.setEntityUrl("/Hotel");
    }
}