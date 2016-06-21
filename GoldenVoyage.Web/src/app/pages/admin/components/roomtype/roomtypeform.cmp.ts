import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Validators  } from "@angular/common";
import { AdminService } from "../../admin.service";
import { Entity } from "../../../../models";
@Component({
    selector: "gv-roomtype-form",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: require("./roomtypeform.cmp.html")
})
export class RoomTypeFormComponent {
    currentPage: number = 1;

    itemForm: ControlGroup;
    code: AbstractControl;

    constructor(private _adminService: AdminService<Entity>, fb: FormBuilder) {
 
        this.itemForm = fb.group({
            "code": ['', Validators.required],
            "description": [] 
        });
        this.code = this.itemForm.controls["code"];
    }


    onSubmit(form: any): void {
        var entity = new Entity();
        entity.Code = form.code;
        entity.Description = form.description;
        console.log(entity);

        this._adminService.add(entity).subscribe(ret => {
            console.log(ret);
        });

    }

}