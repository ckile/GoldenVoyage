import { FormControlBase } from "./formControl";

export class DropdownControl extends FormControlBase<string> {
    controlType = "dropdown";

    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options["options"] || [];
    }
}