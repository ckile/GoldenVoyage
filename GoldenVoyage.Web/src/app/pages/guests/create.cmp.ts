import { Component } from "@angular/core";
import { Guest } from "../../models";
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GvCard } from "../../layout";
import { GuestsService } from "./guests.service";

@Component({
    moduleId: module.id,
    selector: "gv-create-guest",
    template: require("./create.cmp.html"),
    directives: [GvCard, REACTIVE_FORM_DIRECTIVES],
    providers: [GuestsService]
})
export class CreateGuestComponent {
    form: FormGroup;
    model: Guest;
    prowers: string[];
    submitted: boolean = false;

    constructor(private _formBuilder: FormBuilder, private _service: GuestsService) { }

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