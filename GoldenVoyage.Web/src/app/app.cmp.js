"use strict";
require("./app.loader.ts");
var core_1 = require("@angular/core");
var platform_browser_1 = require('@angular/platform-browser');
var router_deprecated_1 = require("@angular/router-deprecated");
var common_1 = require("@angular/common");
var app_state_1 = require("./app.state");
var services_1 = require("./services");
var layout_1 = require("./layout");
var pages_1 = require("./pages");
var AppComponent = (function () {
    function AppComponent(_state, _imageLoader, _spinner, _config, securityService, appTitle) {
        var _this = this;
        this._state = _state;
        this._imageLoader = _imageLoader;
        this._spinner = _spinner;
        this._config = _config;
        this.securityService = securityService;
        this.appTitle = appTitle;
        this.isMenuCollapsed = false;
        appTitle.setTitle("GVHS");
        this._state.subscribe("menu.isCollapsed", function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.location.hash) {
            console.log("ngOnInit _securityService.AuthorizedCallback");
            this.securityService.AuthorizedCallback();
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        layout_1.GvThemePreloader.load().then(function (values) {
            _this._spinner.hide();
        });
    };
    AppComponent.prototype.login = function () {
        console.log("Do login logic");
    };
    AppComponent.prototype.logout = function () {
        console.log("Do logout logic");
        this.securityService.Logoff();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "gv-app",
            styles: [require("normalize.css"), require("./app.scss")],
            template: require("./app.cmp.html"),
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES, layout_1.SidebarComponent, layout_1.HeaderComponent, layout_1.GvThemeRun],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [layout_1.LayoutConfigProvider, layout_1.LayoutConfig, layout_1.GvImageLoaderService, layout_1.GvThemeSpinner]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: "/Forbidden", name: "Forbidden", component: layout_1.ForbiddenComponent
            },
            { path: "/Unauthorized", name: "Unauthorized", component: layout_1.UnauthorizedComponent },
            { path: "/Dashboard", name: "Dashboard", component: layout_1.DashboardComponent, useAsDefault: true },
            { path: "/Walkin", name: "Walkin", component: pages_1.WalkinComponent },
            { path: "/Booking", name: "Booking", component: pages_1.BookingComponent },
            { path: "/RoomView", name: "RoomView", component: pages_1.RoomviewComponent },
            { path: "/Guests", name: "Guests", component: pages_1.GuestsComponent },
            { path: "/Admin/...", name: "Admin", component: pages_1.AdminComponent }
        ]), 
        __metadata('design:paramtypes', [app_state_1.AppState, layout_1.GvImageLoaderService, layout_1.GvThemeSpinner, layout_1.LayoutConfig, services_1.SecurityService, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.cmp.js.map