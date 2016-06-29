import {Component} from "@angular/core";
import { Hotel } from "../../../../models";
import { GvFieldSplit } from "../../../../common/pipes/gvFieldSplit.pipe";
import { AdminService } from "../../admin.service";
import { ListBase } from "../common/list";
import { PaginationComponent } from "ng2-bootstrap";

@Component({
    selector: "gv-list",
    template: require("../common/list.html"),
    pipes: [GvFieldSplit],
    directives: [PaginationComponent]
})
export class HotelListComponent extends ListBase<Hotel> {

    constructor(_adminService: AdminService<Hotel>) {
        super(_adminService);
    }

    protected _initColumns(): void {
        this.columns = [
            { title: "名称", field: "Name" },
            { title: "营业日期", field: "Profile.HotelDate" },
            { title: "报表日期", field: "Profile.ReportDate" },
            { title: "本地服务", field: "Profile.LocalServiceAddress" }
        ];
    }

 

}