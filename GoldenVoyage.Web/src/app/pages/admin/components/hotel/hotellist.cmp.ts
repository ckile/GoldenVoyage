import {Component} from "@angular/core";
import { Hotel,PaginatedResult, PaginateParamter } from "../../../../models";
import { AdminService } from "../../admin.service";
@Component({
    selector: "gv-hotel-list",
    template: require("./hotellist.cmp.html")
})
export class HotelListComponent {

    items: Array<Hotel>;

    currentPage: number = 0;
    pageLength: number = 10;

    draw: number = 1;

    constructor(private _adminService: AdminService<Hotel>) {
        this.updateData();
    }


    private _getParamter(): PaginateParamter {
        this.draw += 1;
        var result = new PaginateParamter();
        result.draw = this.draw;
        result.length = this.pageLength;
        result.start = this.pageLength * this.currentPage;

        return result;
    } 


    updateData(): void {
        var paramter = this._getParamter();        
        this._adminService.postGet(paramter).subscribe(result => {
            console.log(result);
            this.items = result.data;
        });

    }


}