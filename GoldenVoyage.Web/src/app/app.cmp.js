"use strict";
require("./app.loader.ts");
var core_1 = require("@angular/core");
var platform_browser_1 = require('@angular/platform-browser');
var router_deprecated_1 = require("@angular/router-deprecated");
var app_state_1 = require("./app.state");
var services_1 = require("./services");
var layout_1 = require("./layout");
var layout_2 = require("./layout");
var layout_3 = require("./layout");
var pages_1 = require("./pages");
var AppComponent = (function () {
    function AppComponent(_state, _imageLoader, _spinner, _config, _securityService, _appTitle) {
        var _this = this;
        this._state = _state;
        this._imageLoader = _imageLoader;
        this._spinner = _spinner;
        this._config = _config;
        this._securityService = _securityService;
        this._appTitle = _appTitle;
        this.isMenuCollapsed = false;
        _appTitle.setTitle("GVHS");
        this._loadImages();
        this._state.subscribe("menu.isCollapsed", function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
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
        this._securityService.Logoff();
    };
    AppComponent.prototype._loadImages = function () {
        layout_1.GvThemePreloader.registerLoader(this._imageLoader.load(layout_3.layoutPaths.images.root + 'sky-bg.jpg'));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "gv-app",
            pipes: [],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, layout_1.GvThemeRun],
            providers: [layout_2.GvLayoutConfigProvider, layout_2.GvLayoutConfig, layout_1.GvImageLoaderService, layout_1.GvThemeSpinner],
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [require("normalize.css"), require("./app.scss")],
            template: require("./app.cmp.html")
        }),
        router_deprecated_1.RouteConfig([
            { path: "/pages/...", name: "Pages", component: pages_1.PagesComponent, useAsDefault: true },
            {
                path: "/**",
                redirectTo: ["Pages"]
            }
        ]), 
        __metadata('design:paramtypes', [app_state_1.AppState, layout_1.GvImageLoaderService, layout_1.GvThemeSpinner, layout_2.GvLayoutConfig, services_1.SecurityService, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.cmp.js.map