"use strict";
var core_1 = require("@angular/core");
var services_1 = require("../../services");
require("rxjs/add/operator/map");
var AdminService = (function () {
    function AdminService(_apiService) {
        this._apiService = _apiService;
    }
    AdminService.prototype.setEntityUrl = function (url) {
        this.url = url;
    };
    AdminService.prototype.get = function () {
        return this._apiService.get(this.url).map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.postGet = function (paramter) {
        return this._apiService.postGet(this.url, paramter).map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.getById = function (id) {
        return this._apiService.getById(this.url, id).map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.add = function (entity) {
        return this._apiService.post(this.url, entity).map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.delete = function (id) {
        return this._apiService.delete(this.url, id).map(function (res) {
            return res.json();
        });
    };
    AdminService.prototype.update = function (id, entity) {
        return this._apiService.put(this.url, id, entity).map(function (res) {
            return res.json();
        });
    };
    AdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [services_1.ApiService])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map