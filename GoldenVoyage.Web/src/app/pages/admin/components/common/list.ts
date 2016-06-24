import { Hotel, PaginatedResult, PaginateParamter } from "../../../../models";
import { Column } from "../common/model";
import { AdminService } from "../../admin.service";


export abstract class ListBase<T> {
    columns: Array<Column> = new Array<Column>();
    items: Array<T>;

    currentPage: number = 0;
    pageLength: number = 10;

    draw: number = 1;

    constructor(private _adminService: AdminService<T>) {
        this._initColumns();
        this.updateData();
    }

    protected abstract _initColumns();

    protected _getParamter(): PaginateParamter {
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