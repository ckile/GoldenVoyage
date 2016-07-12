import { FormControlBase } from "./formControl";

export class TextBoxControl extends FormControlBase<string> {
    controlType = "textbox";
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || "";
    }
}