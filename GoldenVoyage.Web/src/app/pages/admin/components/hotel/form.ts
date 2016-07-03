import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Validators  } from "@angular/common";
import { AdminService } from "../../admin.service";
import { Hotel, HotelProfile } from "../../../../models";
@Component({
    selector: "gv-form",
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: require("../common/formheader.html") + require("./form.html") + require("../common/formfoot.html"),
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
        entity.name = form.name;
        entity.profile = new HotelProfile();
        entity.profile.hotelDate = form.hotelDate;
        entity.profile.reportDate = form.reportDate;
        entity.profile.localServiceAddress = form.localApi;
        console.log(entity);

        this._adminService.add(entity).subscribe(ret => {
            console.log(ret);
        });

    }

}