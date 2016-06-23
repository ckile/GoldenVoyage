"use strict";
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var GvCardBlurHelper = (function () {
    function GvCardBlurHelper() {
    }
    GvCardBlurHelper.prototype.init = function () {
        this._genBgImage();
        this._genImageLoadSubject();
    };
    GvCardBlurHelper.prototype.bodyBgLoad = function () {
        return this.imageLoadSubject;
    };
    GvCardBlurHelper.prototype.getBodyBgImageSizes = function () {
        var elemW = document.documentElement.clientWidth;
        var elemH = document.documentElement.clientHeight;
        if (elemW <= 640)
            return;
        var imgRatio = (this.image.height / this.image.width);
        var containerRatio = (elemH / elemW);
        var finalHeight, finalWidth;
        if (containerRatio > imgRatio) {
            finalHeight = elemH;
            finalWidth = (elemH / imgRatio);
        }
        else {
            finalWidth = elemW;
            finalHeight = (elemW * imgRatio);
        }
        return { width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2 };
    };
    GvCardBlurHelper.prototype._genBgImage = function () {
        this.image = new Image();
        var computedStyle = getComputedStyle(document.body.querySelector('main'), ':before');
        this.image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    };
    GvCardBlurHelper.prototype._genImageLoadSubject = function () {
        var _this = this;
        this.imageLoadSubject = new Subject_1.Subject();
        this.image.onerror = function (err) {
            _this.imageLoadSubject.complete();
        };
        this.image.onload = function () {
            _this.imageLoadSubject.next(null);
            _this.imageLoadSubject.complete();
        };
    };
    GvCardBlurHelper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GvCardBlurHelper);
    return GvCardBlurHelper;
}());
exports.GvCardBlurHelper = GvCardBlurHelper;
//# sourceMappingURL=gvCardBlurHelper.service.js.map