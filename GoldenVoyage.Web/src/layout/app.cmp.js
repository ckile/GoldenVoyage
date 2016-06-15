"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var common_1 = require("@angular/common");
var services_1 = require("../services");
var components_1 = require("./components");
var pages_1 = require("../pages");
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
            template: require("./app.cmp.html"),
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES, components_1.SidebarComponent, components_1.HeaderComponent],
            events: []
        }),
        router_deprecated_1.RouteConfig([
            {
                path: "/Forbidden", name: "Forbidden", component: components_1.ForbiddenComponent
            },
            { path: "/Unauthorized", name: "Unauthorized", component: components_1.UnauthorizedComponent },
            { path: "/Dashboard", name: "Dashboard", component: components_1.DashboardComponent, useAsDefault: true },
            { path: "/Walkin", name: "Walkin", component: pages_1.WalkinComponent },
            { path: "/Booking", name: "Booking", component: pages_1.BookingComponent },
            { path: "/RoomView", name: "RoomView", component: pages_1.RoomviewComponent },
            { path: "/Guests", name: "Guests", component: pages_1.GuestsComponent },
            { path: "/Admin/...", name: "Admin", component: pages_1.AdminComponent }
        ]), 
        __metadata('design:paramtypes', [services_1.SecurityService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.cmp.js.map