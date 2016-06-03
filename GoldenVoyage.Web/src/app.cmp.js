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
var router_deprecated_1 = require("@angular/router-deprecated");
var security_service_1 = require("./services/security.service");
var header_cmp_1 = require("./layout/header.cmp");
var sidebar_cmp_1 = require("./layout/sidebar.cmp");
var forbidden_cmp_1 = require("./layout/forbidden.cmp");
var unauthorized_cmp_1 = require("./layout/unauthorized.cmp");
var dashboard_cmp_1 = require("./layout/dashboard.cmp");
var walkin_cmp_1 = require("./walkin/walkin.cmp");
var roomview_cmp_1 = require("./roomview/roomview.cmp");
var AppComponent = (function () {
    function AppComponent(securityService) {
        this.securityService = securityService;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.location.hash) {
            console.log("ngOnInit _securityService.AuthorizedCallback");
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
            selector: "gv-app",
            templateUrl: "tmpls/app.cmp.html",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, sidebar_cmp_1.SidebarComponent, header_cmp_1.HeaderComponent],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ],
            events: []
        }),
        router_deprecated_1.RouteConfig([
            { path: "/Forbidden", name: "Forbidden", component: forbidden_cmp_1.ForbiddenComponent },
            { path: "/Unauthorized", name: "Unauthorized", component: unauthorized_cmp_1.UnauthorizedComponent },
            { path: "/Dashboard", name: "Dashboard", component: dashboard_cmp_1.DashboardComponent, useAsDefault: true },
            { path: "/Walkin", name: "Walkin", component: walkin_cmp_1.WalkinComponent },
            { path: "/RoomView", name: "RoomView", component: roomview_cmp_1.RoomviewComponent }
        ]), 
        __metadata('design:paramtypes', [security_service_1.SecurityService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.cmp.js.map