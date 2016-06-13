"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_constants_1 = require("../app.constants");
var security_service_1 = require("./security.service");
var ApiService = (function () {
    function ApiService(_http, _configuration, _securityService) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this._securityService = _securityService;
        this.getUrl = function (actionUrl) {
            return _this._configuration.ApiServer + actionUrl;
        };
        this.hostUrl = "" + _configuration.ApiServer;
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
        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration, security_service_1.SecurityService])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
