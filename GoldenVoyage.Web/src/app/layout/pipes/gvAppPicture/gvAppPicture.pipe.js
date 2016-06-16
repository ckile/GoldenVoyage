"use strict";
var core_1 = require('@angular/core');
var layout_1 = require('../../../layout');
var GvAppPicturePipe = (function () {
    function GvAppPicturePipe() {
    }
    GvAppPicturePipe.prototype.transform = function (input) {
        return layout_1.layoutPaths.images.root + input;
    };
    GvAppPicturePipe = __decorate([
        core_1.Pipe({ name: 'gvAppPicture' }), 
        __metadata('design:paramtypes', [])
    ], GvAppPicturePipe);
    return GvAppPicturePipe;
}());
exports.GvAppPicturePipe = GvAppPicturePipe;
//# sourceMappingURL=gvAppPicture.pipe.js.map