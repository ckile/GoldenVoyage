import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Validators  } from "@angular/common";
import { AdminService } from "../../admin.service";
import { Hotel, HotelProfile } from "../../../../models";
@Component({
    selector: "gv-hotel-form",
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: `
        <form [ngFormModel]="itemForm" (ngSubmit)="onSubmit(itemForm.value)">
                <div class="form-group" [class.error]="!name.valid && name.touched">
                    <label for="hotelName1">酒店名称</label>
                    <input type="text" class="form-control" id="hotelName1" ngControl="name" >
                    <div *ngIf="!name.valid" class="alert alert-danger">
                        必须输入酒店名称
                    </div>
                </div>
                <div class="form-group">
                    <label for="hotelDate1">账务日期</label>
                    <input type="date" class="form-control" id="hotelDate1" ngControl="hotelDate">
                </div>
                <div class="form-group">
                    <label for="reportDate1">报表日期</label>
                    <input type="date" class="form-control" id="reportDate1" ngControl="reportDate">
                </div>
                <div class="form-group">
                    <label for="localApi1">本地服务位置</label>
                    <input type="text" class="form-control" id="localApi1" ngControl="localApi">
                </div>                
                 
                <button [class.sronly]="!itemForm.valid" type="submit" class="btn btn-success">添加</button>
            </form>
    `
})
export class HotelFormComponent {
    currentPage: number = 1;

    itemForm: ControlGroup;
    name: AbstractControl;

    constructor(private _adminService: AdminService<Hotel>, fb: FormBuilder) {
        _adminService.setEntityUrl("/Hotel");

        this.itemForm = fb.group({
            "name": ['', Validators.required],
            "hotelDate": [],
            "reportDate": [],
            "localApi": []
        });
        this.name = this.itemForm.controls["name"];
    }


    onSubmit(form: any): void {
        var entity = new Hotel();
        entity.Name = form.name;
        entity.Profile = new HotelProfile();
        entity.Profile.HotelDate = form.hotelDate;
        entity.Profile.ReportDate = form.reportDate;
        entity.Profile.LocalServiceAddress = form.localApi;
        console.log(entity);

        this._adminService.add(entity).subscribe(ret => {
            console.log(ret);
        });

    }

}