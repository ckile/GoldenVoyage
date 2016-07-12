import {Component, Input} from "@angular/core";

import { FormGroup, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { FormControlBase } from "../../models";

@Component({
    selector: "gv-control",
    template: require("./dynamic-form-control.component.html"),
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class DynamicFormControlComponent {
    @Input() control: FormControlBase<any>;
    @Input() form: FormGroup;

    get isValid() {
        return this.form.controls[this.control.key].valid;
    }
}