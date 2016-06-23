"use strict";
var core_1 = require("@angular/core");
var api_service_1 = require("./api.service");
var rxjs_1 = require("rxjs");
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(_apiService) {
        this._apiService = _apiService;
        this._url = "/EmployeeLogin/Get";
        this._msgUrl = "/Messages";
        this.currentEmployeeLogin = new rxjs_1.BehaviorSubject(null);
    }
    UserService.prototype.getCurrentEmployeeLogin = function () {
        var _this = this;
        this._apiService.get(this._url).subscribe(function (res) {
            _this.currentEmployeeLogin.next(res.json());
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map