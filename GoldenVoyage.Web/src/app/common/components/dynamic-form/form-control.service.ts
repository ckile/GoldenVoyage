import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { FormControlBase } from "../../models";

@Injectable()
export class FormControlService {
    toFormGroup(controls: FormControlBase<any>[]): FormGroup {
        let group: any = {};
        controls.forEach(control => {
            group[control.key] = control.required ? new FormControl(control.value || "", Validators.required) : new FormControl(control.value || "");
        });
        return new FormGroup(group);
    }
}