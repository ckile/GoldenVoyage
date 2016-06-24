import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder } from "@angular/common";
import { AdminService } from "../../admin.service";
import { Entity } from "../../../../models";
import { EntityFormComponent } from "../common/entityform";
@Component({
    selector: "gv-form",
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: require("../common/entityform.html")
})
export class FormComponent extends EntityFormComponent {

    constructor(_adminService: AdminService<Entity>, fb: FormBuilder) {
        super(_adminService, fb);
    }

}