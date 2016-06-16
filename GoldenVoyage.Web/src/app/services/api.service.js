"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_constants_1 = require("../app.constants");
var security_service_1 = require("./security.service");
var ApiService = (function () {
    function ApiService(_http, _securityService) {
        var _this = this;
        this._http = _http;
        this._securityService = _securityService;
        this.getUrl = function (actionUrl) {
            return _this.hostUrl + actionUrl;
        };
        this.hostUrl = "" + app_constants_1.appConstants.ApiServer;
    }
    ApiService.prototype.setHeaders = function () {
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        var token = this._securityService.GetToken();
        if (token !== "") {
            this.headers.append('Authorization', 'Bearer ' + token);
        }
    };
    ApiService.prototype.get = function (actionUrl) {
        this.setHeaders();
        return this._http.get(this.getUrl(actionUrl), { headers: this.headers });
    };
    ApiService.prototype.post = function (actionUrl, item) {
        this.setHeaders();
        return this._http.post(this.getUrl(actionUrl), JSON.stringify(item), { headers: this.headers });
    };
    ApiService.prototype.put = function (actionUrl, id, item) {
        this.setHeaders();
        return this._http.put(this.getUrl(actionUrl) + "/" + id, JSON.stringify(item), { headers: this.headers });
    };
    ApiService.prototype.delete = function (actionUrl, id) {
        this.setHeaders();
        return this._http.delete(this.getUrl(actionUrl) + "/" + id, { headers: this.headers });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, security_service_1.SecurityService])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map