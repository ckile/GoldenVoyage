import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Validators  } from "@angular/common";
import { AdminService } from "../../admin.service";
import { Room } from "../../../../models";
@Component({
    selector: "gv-form",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: require("./form.html")
})
export class RoomFormComponent {
    itemForm: ControlGroup;
    code: AbstractControl;

    constructor(private _adminService: AdminService<Room>, fb: FormBuilder) {
        this.itemForm = fb.group({
            "code": ['', Validators.required],
            "hotelId": [],
            "typeId": [],
            "floor": [],
            "beds": [],
            "features": []
        });
        this.code = this.itemForm.controls["code"];
    }

    onSubmit(form: any): void {
        var entity = new Room();
        entity.code = form.code;
        entity.HotelId = form.hotelId;
        entity.TypeId = form.typeId;
        entity.Floor = form.floor;
        entity.Beds = form.beds;
        console.log(entity);

        this._adminService.add(entity).subscribe(ret => {
            console.log(ret);
        });
    }
}