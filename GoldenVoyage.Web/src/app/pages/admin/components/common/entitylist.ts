import { Entity } from "../../../../models"; 
import { AdminService } from "../../admin.service";

import { ListBase } from "../common/list";

 
export class EntityListBase extends ListBase<Entity> {

    constructor(_adminService: AdminService<Entity>) {
        super(_adminService);
    }

    protected _initColumns(): void {
        this.columns = [
            { title: "代码", field: "Code" },
            { title: "描述", field: "Description" }
        ];
    }

}