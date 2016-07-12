import { FormBuilder,ControlGroup, AbstractControl, Control } from "@angular/common";

export class ReservationFormBuilder {

    public constructor(private _fb: FormBuilder) { }

    /**
     * 
     * @param fb
     */
    public builder(): ControlGroup { 
       var result = this._fb.group({});
        this._guestBuilder(result);

        return result;
    }

    private _guestBuilder(form: ControlGroup) {
        form.addControl("name", this._fb.control(""));

    }


}