"use strict";
var core_1 = require('@angular/core');
var baMsgCenter_service_1 = require('./baMsgCenter.service');
var pipes_1 = require('../../pipes');
var BaMsgCenter = (function () {
    function BaMsgCenter(_baMsgCenterService) {
        this._baMsgCenterService = _baMsgCenterService;
        this.notifications = this._baMsgCenterService.getNotifications();
        this.messages = this._baMsgCenterService.getMessages();
    }
    BaMsgCenter = __decorate([
        core_1.Component({
            selector: 'ba-msg-center',
            providers: [baMsgCenter_service_1.BaMsgCenterService],
            styles: [require('./msgcenter.cmp.scss')],
            template: require('./msgcenter.cmp.html'),
            pipes: [pipes_1.BaProfilePicturePipe]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof baMsgCenter_service_1.BaMsgCenterService !== 'undefined' && baMsgCenter_service_1.BaMsgCenterService) === 'function' && _a) || Object])
    ], BaMsgCenter);
    return BaMsgCenter;
    var _a;
}());
exports.BaMsgCenter = BaMsgCenter;
//# sourceMappingURL=msgcenter.cmp.js.map