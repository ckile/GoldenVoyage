import { ControlGroup, FormBuilder, Validators } from "@angular/common";
import { AdminService } from "../../admin.service";
import { Entity } from "../../../../models";

export class FormBase<T> {
    itemForm: ControlGroup;

    constructor(private _adminService: AdminService<T>,
        private _formBuilder: FormBuilder) {
    }
}