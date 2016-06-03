"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ComboboxComponent = (function () {
    function ComboboxComponent(_cd, _el) {
        this._cd = _cd;
        this._el = _el;
    }
    ComboboxComponent.prototype.ngOnInit = function () { };
    ComboboxComponent.prototype.ngAfterContentInit = function () {
        alert("contentInit");
    };
    ComboboxComponent.prototype.ngAfterViewInit = function () {
        alert("viewInit");
    };
    ComboboxComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes["myProp"].currentValue);
    };
    ComboboxComponent = __decorate([
        core_1.Component({
            selector: "gv-combobox[ngModel]",
            inputs: ["itemsSource"],
            template: "",
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.NgClass, common_1.NgModel]
        }),
        __param(0, core_1.Self()), 
        __metadata('design:paramtypes', [common_1.NgModel, core_1.ElementRef])
    ], ComboboxComponent);
    return ComboboxComponent;
}());
exports.ComboboxComponent = ComboboxComponent;
//# sourceMappingURL=combobox.cmp.js.map