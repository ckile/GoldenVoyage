"use strict";
var core_1 = require('@angular/core');
var layout_1 = require('../../../layout');
var gvCardBlurHelper_service_1 = require('./gvCardBlurHelper.service');
var GvCardBlur = (function () {
    function GvCardBlur(_gvConfig, _gvCardBlurHelper, _el) {
        this._gvConfig = _gvConfig;
        this._gvCardBlurHelper = _gvCardBlurHelper;
        this._el = _el;
        this.isEnabled = false;
        if (this._isEnabled()) {
            this._gvCardBlurHelper.init();
            this._getBodyImageSizesOnBgLoad();
            this._recalculateCardStylesOnBgLoad();
            this.isEnabled = true;
        }
    }
    GvCardBlur.prototype._onWindowResize = function () {
        if (this._isEnabled()) {
            this._bodyBgSize = this._gvCardBlurHelper.getBodyBgImageSizes();
            this._recalculateCardStyle();
        }
    };
    GvCardBlur.prototype._getBodyImageSizesOnBgLoad = function () {
        var _this = this;
        this._gvCardBlurHelper.bodyBgLoad().subscribe(function () {
            _this._bodyBgSize = _this._gvCardBlurHelper.getBodyBgImageSizes();
        });
    };
    GvCardBlur.prototype._recalculateCardStylesOnBgLoad = function () {
        var _this = this;
        this._gvCardBlurHelper.bodyBgLoad().subscribe(function (event) {
            setTimeout(_this._recalculateCardStyle.bind(_this));
        });
    };
    GvCardBlur.prototype._recalculateCardStyle = function () {
        if (!this._bodyBgSize) {
            return;
        }
        this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
        this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
    };
    GvCardBlur.prototype._isEnabled = function () {
        return this._gvConfig.get().theme.name == 'blur';
    };
    __decorate([
        core_1.HostBinding('class.card-blur'), 
        __metadata('design:type', Boolean)
    ], GvCardBlur.prototype, "isEnabled", void 0);
    __decorate([
        core_1.HostListener('window:resize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], GvCardBlur.prototype, "_onWindowResize", null);
    GvCardBlur = __decorate([
        core_1.Directive({
            selector: '[gvCardBlur]',
            providers: [gvCardBlurHelper_service_1.GvCardBlurHelper]
        }), 
        __metadata('design:paramtypes', [layout_1.GvLayoutConfigProvider, gvCardBlurHelper_service_1.GvCardBlurHelper, core_1.ElementRef])
    ], GvCardBlur);
    return GvCardBlur;
}());
exports.GvCardBlur = GvCardBlur;
//# sourceMappingURL=gvCardBlur.directive.js.map