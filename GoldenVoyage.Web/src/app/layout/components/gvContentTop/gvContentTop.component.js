"use strict";
var core_1 = require('@angular/core');
var app_state_1 = require("../../../app.state");
var GvContentTop = (function () {
    function GvContentTop(_state) {
        var _this = this;
        this._state = _state;
        this.activePageTitle = '';
        this._state.subscribe('menu.activeLink', function (activeLink) {
            if (activeLink) {
                _this.activePageTitle = activeLink.title;
            }
        });
    }
    GvContentTop = __decorate([
        core_1.Component({
            selector: 'gv-content-top',
            styles: [require('./gvContentTop.scss')],
            template: require('./gvContentTop.html'),
        }), 
        __metadata('design:paramtypes', [app_state_1.AppState])
    ], GvContentTop);
    return GvContentTop;
}());
exports.GvContentTop = GvContentTop;
//# sourceMappingURL=gvContentTop.component.js.map