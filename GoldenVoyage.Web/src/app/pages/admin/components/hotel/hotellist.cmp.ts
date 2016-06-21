import {Component} from "@angular/core";
import { Hotel } from "../../../../models";
import { AdminService } from "../../admin.service";
@Component({
    selector: "gv-hotel-list",
    template: `
    <ul></ul>
`
})
export class HotelListComponent {

    items: Array<Hotel>;

    constructor(private _adminService: AdminService<Hotel>) {
         
    }

    updateData(): void {

        this._adminService.get().subscribe(result => {
            this.items = result.data;
        });

    }


}