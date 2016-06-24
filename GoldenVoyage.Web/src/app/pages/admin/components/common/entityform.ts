import {FormBuilder, ControlGroup, AbstractControl, Validators  } from "@angular/common";
import { AdminService } from "../../admin.service";
import { Entity } from "../../../../models";
 
export class EntityFormComponent {

    itemForm: ControlGroup;
    code: AbstractControl;

    constructor(protected _adminService: AdminService<Entity>, fb: FormBuilder) {

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