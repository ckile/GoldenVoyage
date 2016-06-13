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
var common_1 = require("@angular/common");
var security_service_1 = require("./services/security.service");
var header_cmp_1 = require("./layout/header.cmp");
var sidebar_cmp_1 = require("./layout/sidebar.cmp");
var forbidden_cmp_1 = require("./layout/forbidden.cmp");
var unauthorized_cmp_1 = require("./layout/unauthorized.cmp");
var dashboard_cmp_1 = require("./layout/dashboard.cmp");
var walkin_cmp_1 = require("./walkin/walkin.cmp");
var booking_cmp_1 = require("./booking/booking.cmp");
var roomview_cmp_1 = require("./roomview/roomview.cmp");
var guests_cmp_1 = require("./guests/guests.cmp");
var admin_cmp_1 = require("./admin/admin.cmp");
var AppComponent = (function () {
    function AppComponent(securityService) {
        this.securityService = securityService;
        this.IsAuthorized = false;
        this.IsAuthorized = securityService.IsAuthorized;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.location.hash) {
            console.log("ngOnInit _securityService.AuthorizedCallback");
            this.securityService.AuthorizedCallback();
        }
    };
    AppComponent.prototype.login = function () {
        console.log("Do login logic");
        this.IsAuthorized = true;
    };
    AppComponent.prototype.logout = function () {
        console.log("Do logout logic");
        this.securityService.Logoff();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "gv-app",
            templateUrl: "tmpls/app.cmp.html",
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES, sidebar_cmp_1.SidebarComponent, header_cmp_1.HeaderComponent],
            events: []
        }),
        router_deprecated_1.RouteConfig([
            {
                path: "/Forbidden", name: "Forbidden", component: forbidden_cmp_1.ForbiddenComponent
            },
            { path: "/Unauthorized", name: "Unauthorized", component: unauthorized_cmp_1.UnauthorizedComponent },
            { path: "/Dashboard", name: "Dashboard", component: dashboard_cmp_1.DashboardComponent, useAsDefault: true },
            { path: "/Walkin", name: "Walkin", component: walkin_cmp_1.WalkinComponent },
            { path: "/Booking", name: "Booking", component: booking_cmp_1.BookingComponent },
            { path: "/RoomView", name: "RoomView", component: roomview_cmp_1.RoomviewComponent },
            { path: "/Guests", name: "Guests", component: guests_cmp_1.GuestsComponent },
            { path: "/Admin/...", name: "Admin", component: admin_cmp_1.AdminComponent }
        ]), 
        __metadata('design:paramtypes', [security_service_1.SecurityService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
