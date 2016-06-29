import { Hotel, PaginatedResult, PaginateParamter } from "../../../../models";
import { Column } from "../common/model";
import { AdminService } from "../../admin.service";


export abstract class ListBase<T> {
    columns: Array<Column> = new Array<Column>();
    items: Array<T>;

    totalItems: number = 23;

    currentPage: number = 1;
    pageLength: number = 10;

    loadding: boolean = false;

    draw: number = 1;

    constructor(private _adminService: AdminService<T>) {
        this._initColumns();
        this.updateData();
    }

    pageChanged(event: any) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
      //  this.updateData(event.page);
      

    }

    protected abstract _initColumns();

    protected _getParamter(page:number): PaginateParamter {
        this.draw += 1;
        var result = new PaginateParamter();
        result.draw = this.draw;
        result.length = this.pageLength;
        result.start = this.pageLength * (page - 1);

        return result;
    }

    onEdit(item: T) {
        this._adminService.editEntity.next(item);
    }

    updateData(page:number = 1): void {
        this.loadding = true;
        var paramter = this._getParamter(page);
        this._adminService.postGet(paramter).subscribe(result => {
            console.log(result);
            this.items = result.data;
           // this.totalItems = result.recordsFiltered;
            setTimeout(() => { this.loadding = false; });
        });

    }


}