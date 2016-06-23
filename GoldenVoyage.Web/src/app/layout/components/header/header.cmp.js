"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var app_state_1 = require("../../../app.state");
var directives_1 = require("../../directives");
var userinfo_1 = require("../userinfo");
var HeaderComponent = (function () {
    function HeaderComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isScrolled = false;
        this.isMenuCollapsed = false;
        this._state.subscribe("menu.isCollapsed", function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    HeaderComponent.prototype.scrolledChanged = function (isScrolled) {
        this.isScrolled = isScrolled;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: "gv-header",
            styles: [require("./header.cmp.scss")],
            template: require("./header.cmp.html"),
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, directives_1.GvScrollPosition, userinfo_1.UserInfoComponent],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [app_state_1.AppState])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.cmp.js.map