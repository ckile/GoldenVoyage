import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";

import { DynamicFormControlComponent } from "./dynamic-form-control.component";

import { FormControlBase } from "../../models";
import { FormControlService } from "./form-control.service";
@Component({
    selector: "dynamic-form",
    template: require("./dynamic-form.component.html"),
    directives: [DynamicFormControlComponent, REACTIVE_FORM_DIRECTIVES],
    providers: [FormControlService]
})
export class DynamicFormComponent implements OnInit {
    @Input() controls: FormControlBase<any>[] = [];

    form: FormGroup;

    payLoad = "";
    constructor(private _fcs: FormControlService) {
    }
    ngOnInit() { 
        this.form = this._fcs.toFormGroup(this.controls);
        console.log(this.form);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
        console.log(this.payLoad);
    }
}