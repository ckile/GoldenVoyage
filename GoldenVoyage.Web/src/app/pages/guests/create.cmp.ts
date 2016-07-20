import { Component } from "@angular/core";
import { Guest } from "../../models";
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GvCard } from "../../layout";

@Component({
    moduleId: module.id,
    selector: "gv-create-guest",
    template: require("./create.cmp.html"),
    directives: [GvCard, REACTIVE_FORM_DIRECTIVES]
})
export class CreateGuestComponent {
    form: FormGroup;
    model: Guest;
    prowers: string[];
    submitted: boolean = false;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.model = new Guest();
        this._buildForm(this._formBuilder);
    }

    private _buildForm(fb: FormBuilder) {
        this.form = fb.group({
            name: [this.model.name, Validators.required],

        });
    }

    onSubmit() {
        this.submitted = true;
    }

}