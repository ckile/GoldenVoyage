"use strict";
var core_1 = require('@angular/core');
var GvScrollPosition = (function () {
    function GvScrollPosition() {
        this.scrollChange = new core_1.EventEmitter();
    }
    GvScrollPosition.prototype.ngOnInit = function () {
        this.onWindowScroll();
    };
    GvScrollPosition.prototype.onWindowScroll = function () {
        var isScrolled = window.scrollY > this.maxHeight;
        if (isScrolled !== this._isScrolled) {
            this._isScrolled = isScrolled;
            this.scrollChange.emit(isScrolled);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], GvScrollPosition.prototype, "maxHeight", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GvScrollPosition.prototype, "scrollChange", void 0);
    __decorate([
        core_1.HostListener('window:scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], GvScrollPosition.prototype, "onWindowScroll", null);
    GvScrollPosition = __decorate([
        core_1.Directive({
            selector: '[gvScrollPosition]'
        }), 
        __metadata('design:paramtypes', [])
    ], GvScrollPosition);
    return GvScrollPosition;
}());
exports.GvScrollPosition = GvScrollPosition;
//# sourceMappingURL=gvScrollPosition.directive.js.map