import {Component} from "@angular/core";
import { Entity, PaginatedResult, PaginateParamter } from "../../../../models";
import { AdminService } from "../../admin.service";
@Component({
    selector: "gv-roomtype-list",
    template: require("./roomtypelist.cmp.html")
})
export class RoomTypeListComponent {

    items: Array<Entity>;

    currentPage: number = 0;
    pageLength: number = 10;

    draw: number = 1;

    constructor(private _adminService: AdminService<Entity>) {
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

    onEdit(entity: Entity):void {

    }

    updateData(): void {
        var paramter = this._getParamter();
        this._adminService.postGet(paramter).subscribe(result => {
            console.log(result);
            this.items = result.data;
        });

    }


}