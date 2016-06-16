"use strict";
var core_1 = require('@angular/core');
var GvThemeSpinner = (function () {
    function GvThemeSpinner() {
        this._selector = 'preloader';
        this._element = document.getElementById(this._selector);
    }
    GvThemeSpinner.prototype.show = function () {
        this._element.style['display'] = 'block';
    };
    GvThemeSpinner.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this._element.style['display'] = 'none';
        }, delay);
    };
    GvThemeSpinner = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GvThemeSpinner);
    return GvThemeSpinner;
}());
exports.GvThemeSpinner = GvThemeSpinner;
//# sourceMappingURL=gvThemeSpinner.service.js.map