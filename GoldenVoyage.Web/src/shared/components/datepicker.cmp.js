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
var DatepickerComponent = (function () {
    function DatepickerComponent(cd, _el) {
        this._el = _el;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.cd = cd;
        cd.valueAccessor = this;
    }
    Object.defineProperty(DatepickerComponent.prototype, "activeDate", {
        set: function (value) {
            this._activeDate = value;
            this.updateDatepicker(this._activeDate);
        },
        enumerable: true,
        configurable: true
    });
    DatepickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elem = $(this._el.nativeElement);
        elem.datepicker({
            todayHighlight: true,
            language: "zh-CN",
            format: 'yyyy-mm-dd',
            todayBtn: true
        });
        elem.on("change", function (e) {
            var date = $(elem).datepicker("getDate");
            if (_this._activeDate.toLocaleDateString() === date.toLocaleDateString()) {
                return;
            }
            _this._activeDate = date;
            _this.cd.viewToModelUpdate(date);
        });
    };
    DatepickerComponent.prototype.updateDatepicker = function (value) {
        $(this._el.nativeElement).datepicker("setDate", value);
    };
    DatepickerComponent.prototype.ngOnChanges = function () {
        alert("ngOnChanges");
    };
    DatepickerComponent.prototype.writeValue = function (value) {
        if (value === this._activeDate) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    DatepickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatepickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DatepickerComponent = __decorate([
        core_1.Component({
            selector: "gv-datepicker[ngModel]",
            events: ['change'],
            template: "<div class=\"input-group date\"><input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" /><span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span></div>",
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.NgClass, common_1.NgModel]
        }),
        __param(0, core_1.Self()), 
        __metadata('design:paramtypes', [common_1.NgModel, core_1.ElementRef])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;
//# sourceMappingURL=datepicker.cmp.js.map