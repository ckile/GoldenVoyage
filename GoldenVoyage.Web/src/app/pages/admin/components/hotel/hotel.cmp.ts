import { Component } from "@angular/core"; 
import { AdminService } from "../../admin.service";
import { Hotel, HotelProfile } from "../../../../models";
import { HotelListComponent } from "./hotellist.cmp";
import { HotelFormComponent } from "./hotelform.cmp";

@Component({
    selector: "gv-admin-hotel",
    template: `
        <div class="widgets">
            <div class="row">
                <div class="col-md-8">
                    <ul>

                    </ul>
                </div>

                <div class="col-md-4">
                    <gv-hotel-form></gv-hotel-form>
                </div>
            </div>
        </div>

    `,
    providers: [AdminService],
    directives: [HotelFormComponent, HotelListComponent],
    
})
export class HotelComponent {
     constructor(private _adminService: AdminService<Hotel>) {
        _adminService.setEntityUrl("/Hotel");
    }





}