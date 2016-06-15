"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var GvDatePickerComponent = (function () {
    function GvDatePickerComponent(ngControl) {
        this.dateChange = new core_1.EventEmitter();
        this.timepickerOptions = {};
        this.datepickerOptions = {};
        this.idDatePicker = uniqueId('q-datepicker_');
        this.idTimePicker = uniqueId('q-timepicker_');
        this.onChange = function (_) {
        };
        this.onTouched = function () {
        };
        ngControl.valueAccessor = this;
    }
    GvDatePickerComponent.prototype.ngAfterViewInit = function () {
        this.init();
    };
    GvDatePickerComponent.prototype.ngOnDestroy = function () {
        if (this.datepicker) {
        }
    };
    GvDatePickerComponent.prototype.writeValue = function (value) {
        var _this = this;
        this.date = value;
        if (isDate(this.date)) {
            setTimeout(function () {
                _this.updateModel(_this.date);
            }, 0);
        }
    };
    GvDatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    GvDatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    GvDatePickerComponent.prototype.init = function () {
        var _this = this;
        if (!this.datepicker && this.datepickerOptions !== false) {
            this.datepicker = $('#' + this.idDatePicker).datepicker(this.datepickerOptions);
            this.datepicker
                .on('changeDate', function (e) {
                var newDate = e.date;
                if (isDate(_this.date) && isDate(newDate)) {
                    var h = _this.date.getHours();
                    var m = _this.date.getMinutes();
                    newDate.setHours(h);
                    newDate.setMinutes(m);
                }
                _this.date = newDate;
                _this.dateChange.emit(newDate);
            });
        }
        else if (this.datepickerOptions === false) {
            $('#' + this.idDatePicker).remove();
        }
        if (!this.timepicker && this.timepickerOptions !== false) {
            var options = jQuery.extend({ defaultTime: false }, this.timepickerOptions);
            this.timepicker = $('#' + this.idTimePicker).timepicker(options);
            this.timepicker
                .on('changeTime.timepicker', function (e) {
                var meridian = e.time.meridian;
                var hours = e.time.hours;
                if (meridian) {
                    if (meridian === 'PM' && hours < 12) {
                        hours = hours + 12;
                    }
                    if (meridian === 'AM' && hours === 12) {
                        hours = hours - 12;
                    }
                    hours = _this.pad(hours);
                }
                if (!isDate(_this.date)) {
                    _this.date = new Date();
                    if (_this.datepicker !== undefined) {
                        _this.datepicker.datepicker('update', _this.date.toLocaleDateString('zh-CN'));
                    }
                }
                _this.date.setHours(parseInt(hours));
                _this.date.setMinutes(e.time.minutes);
                _this.dateChange.emit(_this.date);
            });
        }
        else if (this.timepickerOptions === false) {
            $('#' + this.idTimePicker).parent().remove();
        }
    };
    GvDatePickerComponent.prototype.updateModel = function (date) {
        if (this.datepicker !== undefined) {
            this.datepicker.datepicker('update', date.toLocaleDateString('en-US'));
        }
        if (this.timepicker !== undefined) {
            var hours = this.date.getHours();
            if (this.timepickerOptions.showMeridian) {
                hours = (hours === 0 || hours === 12) ? 12 : hours % 12;
            }
            var meridian = this.date.getHours() >= 12 ? ' PM' : ' AM';
            this.timepicker.timepicker('setTime', this.pad(hours) + ':' + this.date.getMinutes() + meridian);
        }
    };
    GvDatePickerComponent.prototype.pad = function (value) {
        return (value && value.toString().length < 2) ? '0' + value : value.toString();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GvDatePickerComponent.prototype, "dateChange", void 0);
    __decorate([
        core_1.Input("timepicker"), 
        __metadata('design:type', Object)
    ], GvDatePickerComponent.prototype, "timepickerOptions", void 0);
    __decorate([
        core_1.Input("datepicker"), 
        __metadata('design:type', Object)
    ], GvDatePickerComponent.prototype, "datepickerOptions", void 0);
    __decorate([
        core_1.HostListener('dateChange', ['$event']), 
        __metadata('design:type', Object)
    ], GvDatePickerComponent.prototype, "onChange", void 0);
    GvDatePickerComponent = __decorate([
        core_1.Component({
            selector: "gv-datepicker",
            template: "\n    <div class=\"form-inline\">\n        <div id=\"{{idDatePicker}}\" class=\"input-group date\"> \n            <input type=\"text\" class=\"form-control\"/>\n            <div class=\"input-group-addon\">\n                <span [ngClass]=\"datepickerOptions.icon || 'glyphicon glyphicon-th'\"></span>\n            </div>\n        </div>\n        <div class=\"input-group bootstrap-timepicker timepicker\">\n            <input id=\"{{idTimePicker}}\" type=\"text\" class=\"form-control input-small\">\n            <span class=\"input-group-addon\"><i [ngClass]=\"timepickerOptions.icon || 'glyphicon glyphicon-time'\"></i></span>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [common_1.NgControl])
    ], GvDatePickerComponent);
    return GvDatePickerComponent;
}());
exports.GvDatePickerComponent = GvDatePickerComponent;
var id = 0;
function uniqueId(prefix) {
    return prefix + ++id;
}
function isDate(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}
//# sourceMappingURL=datepicker.cmp.js.map