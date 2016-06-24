import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Validators  } from "@angular/common";
import { AdminService } from "../../admin.service";
import { Hotel, HotelProfile } from "../../../../models";
@Component({
    selector: "gv-form",
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: require("./form.html")
})
export class HotelFormComponent { 

    itemForm: ControlGroup;
    name: AbstractControl;

    constructor(private _adminService: AdminService<Hotel>, fb: FormBuilder) { 

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