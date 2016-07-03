import { Component } from "@angular/core";
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, AbstractControl, Validators  } from "@angular/common";
import { AdminService } from "../../admin.service";
import { Entity } from "../../../../models";

@Component({
    selector: "gv-form",
    template: require("./formheader.html") + require("./entityform.html") + require("./formfoot.html"),
    directives: [FORM_DIRECTIVES]
})
export class EntityFormComponent {
    itemForm: ControlGroup;
    code: AbstractControl;

    constructor(protected _adminService: AdminService<Entity>, fb: FormBuilder) {

        this._builddingForm(fb);


        _adminService.editEntity.subscribe(entity => {
            this._builddingForm(fb, entity);
        });
    }

    // 构建一个form
    private _builddingForm(fb:FormBuilder, entity?: Entity): void {
        this.itemForm = fb.group({
            "code": [entity && entity.code || "", Validators.required],
            "description": [entity && entity.description || ""],
        });
        this.code = this.itemForm.controls["code"];

    }


    onSubmit(form: any): void {
        var entity = new Entity();
        entity.code = form.code;
        entity.description = form.description;
        console.log(entity);

        this._adminService.add(entity).subscribe(ret => {
            console.log(ret);
        });
    }
}