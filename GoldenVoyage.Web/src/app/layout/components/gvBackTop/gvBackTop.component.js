"use strict";
var core_1 = require('@angular/core');
var GvBackTop = (function () {
    function GvBackTop() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    GvBackTop.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    GvBackTop.prototype._onClick = function () {
        $('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    GvBackTop.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? $(el).fadeIn(this.showSpeed) : $(el).fadeOut(this.showSpeed);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], GvBackTop.prototype, "position", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], GvBackTop.prototype, "showSpeed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], GvBackTop.prototype, "moveSpeed", void 0);
    __decorate([
        core_1.ViewChild('gvBackTop'), 
        __metadata('design:type', core_1.ElementRef)
    ], GvBackTop.prototype, "_selector", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Boolean)
    ], GvBackTop.prototype, "_onClick", null);
    __decorate([
        core_1.HostListener('window:scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], GvBackTop.prototype, "_onWindowScroll", null);
    GvBackTop = __decorate([
        core_1.Component({
            selector: 'gv-back-top',
            styles: [require('./gvBackTop.scss')],
            template: "\n    <i #gvBackTop class=\"fa fa-angle-up back-top ba-back-top\" title=\"Back to Top\"></i>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], GvBackTop);
    return GvBackTop;
}());
exports.GvBackTop = GvBackTop;
//# sourceMappingURL=gvBackTop.component.js.map