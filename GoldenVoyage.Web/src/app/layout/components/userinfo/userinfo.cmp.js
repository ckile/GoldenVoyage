"use strict";
var core_1 = require("@angular/core");
var services_1 = require("../../../services");
var msgcenter_1 = require("../msgcenter");
var pipes_1 = require("../../pipes");
var UserInfoComponent = (function () {
    function UserInfoComponent(_userService) {
        var _this = this;
        this._userService = _userService;
        this._userService.currentEmployeeLogin.subscribe(function (login) {
            _this._updateUserInfo(login);
        });
        this._userService.getCurrentEmployeeLogin();
    }
    UserInfoComponent.prototype._updateUserInfo = function (login) {
        console.log(login);
    };
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: "gv-user-info",
            template: "\n    <div class=\"user-profile clearfix\">\n    <a href=\"#\" class=\"al-sub-logo clearfix hidden-xs\">\u91D1\u822A\u9152\u5E971</a>\n    <div class=\"dropdown al-user-profile\">\n      <a class=\"profile-toggle-link dropdown-toggle\" id=\"user-profile-dd\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n        <img src=\"{{ ( 'Nasta' | gvProfilePicture ) }}\">\n      </a>\n      <div class=\"dropdown-menu top-dropdown-menu profile-dropdown\" aria-labelledby=\"user-profile-dd\">\n        <li class=\"dropdown-item\"><i class=\"dropdown-arr\"></i></li>\n        <li class=\"dropdown-item\"><a href=\"#/profile\"><i class=\"fa fa-user\"></i>Profile</a></li>\n        <li class=\"dropdown-item\"><a href><i class=\"fa fa-cog\"></i>Settings</a></li>\n        <li class=\"dropdown-item\"><a href class=\"signout\"><i class=\"fa fa-power-off\"></i>Sign out</a></li>\n      </div>\n    </div>\n    <gv-msg-center></gv-msg-center>\n  </div>\n    ",
            directives: [msgcenter_1.GvMsgCenter],
            pipes: [pipes_1.GvProfilePicturePipe]
        }), 
        __metadata('design:paramtypes', [services_1.UserService])
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=userinfo.cmp.js.map