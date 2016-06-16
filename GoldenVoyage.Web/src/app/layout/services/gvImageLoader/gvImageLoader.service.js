"use strict";
var core_1 = require('@angular/core');
var GvImageLoaderService = (function () {
    function GvImageLoaderService() {
    }
    GvImageLoaderService.prototype.load = function (src) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.src = src;
            img.onload = function () {
                resolve('Image with src ' + src + ' loaded successfully.');
            };
        });
    };
    GvImageLoaderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GvImageLoaderService);
    return GvImageLoaderService;
}());
exports.GvImageLoaderService = GvImageLoaderService;
//# sourceMappingURL=gvImageLoader.service.js.map