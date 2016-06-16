"use strict";
var core_1 = require('@angular/core');
var layout_1 = require('../../../layout');
var GvProfilePicturePipe = (function () {
    function GvProfilePicturePipe() {
    }
    GvProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'png'; }
        return layout_1.layoutPaths.images.profile + input + '.' + ext;
    };
    GvProfilePicturePipe = __decorate([
        core_1.Pipe({ name: 'gvProfilePicture' }), 
        __metadata('design:paramtypes', [])
    ], GvProfilePicturePipe);
    return GvProfilePicturePipe;
}());
exports.GvProfilePicturePipe = GvProfilePicturePipe;
//# sourceMappingURL=gvProfilePicture.pipe.js.map