import { Component } from "@angular/core";
import { AdminService } from "../admin.service";
import { Hotel } from "../../../models";
@Component({
    selector: "gv-admin-hotel",
    template: require("./hotel.cmp.html"),
    providers:[AdminService]
})
export class HotelComponent {

    constructor(private _adminService: AdminService<Hotel>) {
        _adminService.setEntityUrl("Hotel");
    }



}