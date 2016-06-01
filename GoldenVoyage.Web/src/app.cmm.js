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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var forbidden_cmm_1 = require('./cmms/forbidden.cmm');
var unauthorized_cmm_1 = require('./cmms/unauthorized.cmm');
var security_service_1 = require('../services/security.service');
var AppComponent = (function () {
    function AppComponent(securityService) {
        this.securityService = securityService;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit _securityService.AuthorizedCallback");
        if (window.location.hash) {
            this.securityService.AuthorizedCallback();
        }
    };
    AppComponent.prototype.Login = function () {
        console.log("Do login logic");
        this.securityService.Authorize();
    };
    AppComponent.prototype.Logout = function () {
        console.log("Do logout logic");
        this.securityService.Logoff();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'gv-app',
            templateUrl: 'tmpls/app.cmm.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/Forbidden', name: 'Forbidden', component: forbidden_cmm_1.ForbiddenComponent },
            { path: '/Unauthorized', name: 'Unauthorized', component: unauthorized_cmm_1.UnauthorizedComponent }
        ]), 
        __metadata('design:paramtypes', [security_service_1.SecurityService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.cmm.js.map