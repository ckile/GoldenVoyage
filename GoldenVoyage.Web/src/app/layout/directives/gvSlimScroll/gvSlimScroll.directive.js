"use strict";
var core_1 = require('@angular/core');
require('./gvSlimScroll.loader.ts');
var GvSlimScroll = (function () {
    function GvSlimScroll(_elementRef) {
        this._elementRef = _elementRef;
    }
    GvSlimScroll.prototype.ngOnChanges = function (changes) {
        this._scroll();
    };
    GvSlimScroll.prototype._scroll = function () {
        this._destroy();
        this._init();
    };
    GvSlimScroll.prototype._init = function () {
        $(this._elementRef.nativeElement).slimScroll(this.gvSlimScrollOptions);
    };
    GvSlimScroll.prototype._destroy = function () {
        $(this._elementRef.nativeElement).slimScroll({ destroy: true });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GvSlimScroll.prototype, "gvSlimScrollOptions", void 0);
    GvSlimScroll = __decorate([
        core_1.Directive({
            selector: '[gvSlimScroll]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], GvSlimScroll);
    return GvSlimScroll;
}());
exports.GvSlimScroll = GvSlimScroll;
//# sourceMappingURL=gvSlimScroll.directive.js.map