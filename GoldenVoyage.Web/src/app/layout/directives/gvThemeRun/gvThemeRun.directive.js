"use strict";
var core_1 = require('@angular/core');
var layout_1 = require("../../../layout");
var GvThemeRun = (function () {
    function GvThemeRun() {
        this._classes = [];
        this._gvConfig = new layout_1.GvLayoutConfigProvider();
    }
    GvThemeRun.prototype.ngOnInit = function () {
        this._assignTheme();
        this._assignMobile();
    };
    GvThemeRun.prototype._assignTheme = function () {
        this._addClass(this._gvConfig.get().theme.name);
    };
    GvThemeRun.prototype._assignMobile = function () {
        if (layout_1.isMobile()) {
            this._addClass('mobile');
        }
    };
    GvThemeRun.prototype._addClass = function (cls) {
        this._classes.push(cls);
        this.classesString = this._classes.join(' ');
    };
    __decorate([
        core_1.HostBinding('class'), 
        __metadata('design:type', String)
    ], GvThemeRun.prototype, "classesString", void 0);
    GvThemeRun = __decorate([
        core_1.Directive({
            selector: '[gvThemeRun]'
        }), 
        __metadata('design:paramtypes', [])
    ], GvThemeRun);
    return GvThemeRun;
}());
exports.GvThemeRun = GvThemeRun;
//# sourceMappingURL=gvThemeRun.directive.js.map