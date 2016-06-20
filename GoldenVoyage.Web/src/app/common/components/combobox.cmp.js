"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ComboboxComponent = (function () {
    function ComboboxComponent(_cd, _el) {
        this._cd = _cd;
        this._el = _el;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.options = [];
        _cd.valueAccessor = this;
    }
    ComboboxComponent.prototype.ngOnInit = function () {
        this.initOptions();
    };
    ComboboxComponent.prototype.ngAfterViewInit = function () {
    };
    ComboboxComponent.prototype.initOptions = function () {
        this.options.push({ Id: 1, Description: "Option1" });
        this.options.push({ Id: 2, Description: "Option2" });
        this.options.push({ Id: 3, Description: "Option3" });
    };
    ComboboxComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes["itemsSource"].currentValue);
    };
    ComboboxComponent.prototype.writeValue = function (value) {
        if (value === this._selectedId) {
            return;
        }
        if (value) {
            this._selectedId = value;
            return;
        }
        this._selectedId = value ? 0 : void 0;
    };
    ComboboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ComboboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ComboboxComponent = __decorate([
        core_1.Component({
            selector: "gv-combobox[ngModel]",
            inputs: ["itemsSource"],
            template: "<select class=\"form-control\"><option value=\"0\">\u672A\u9009\u62E9</option><option *ngFor=\"let option of options\" [value]=\"option.Id\">{{ option.Description }}<option></select>",
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.NgClass, common_1.NgModel]
        }),
        __param(0, core_1.Self()), 
        __metadata('design:paramtypes', [common_1.NgModel, core_1.ElementRef])
    ], ComboboxComponent);
    return ComboboxComponent;
}());
exports.ComboboxComponent = ComboboxComponent;
//# sourceMappingURL=combobox.cmp.js.map