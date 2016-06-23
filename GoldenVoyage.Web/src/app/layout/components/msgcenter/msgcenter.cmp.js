"use strict";
var core_1 = require('@angular/core');
var pipes_1 = require("../../pipes");
var GvMsgCenter = (function () {
    function GvMsgCenter() {
    }
    GvMsgCenter = __decorate([
        core_1.Component({
            selector: 'gv-msg-center',
            styles: [require('./msgcenter.cmp.scss')],
            template: require('./msgcenter.cmp.html'),
            pipes: [pipes_1.GvProfilePicturePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], GvMsgCenter);
    return GvMsgCenter;
}());
exports.GvMsgCenter = GvMsgCenter;
//# sourceMappingURL=msgcenter.cmp.js.map