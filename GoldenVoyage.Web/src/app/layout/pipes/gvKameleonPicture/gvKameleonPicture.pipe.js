"use strict";
var core_1 = require('@angular/core');
var layout_1 = require('../../../layout');
var GvKameleonPicturePipe = (function () {
    function GvKameleonPicturePipe() {
    }
    GvKameleonPicturePipe.prototype.transform = function (input) {
        return layout_1.layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
    };
    GvKameleonPicturePipe = __decorate([
        core_1.Pipe({ name: 'gvKameleonPicture' }), 
        __metadata('design:paramtypes', [])
    ], GvKameleonPicturePipe);
    return GvKameleonPicturePipe;
}());
exports.GvKameleonPicturePipe = GvKameleonPicturePipe;
//# sourceMappingURL=gvKameleonPicture.pipe.js.map