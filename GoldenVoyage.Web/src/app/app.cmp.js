"use strict";
require("./app.loader.ts");
var core_1 = require("@angular/core");
var platform_browser_1 = require('@angular/platform-browser');
var router_deprecated_1 = require("@angular/router-deprecated");
var pages_1 = require("./pages");
var app_state_1 = require("./app.state");
var layout_1 = require("./layout");
var directives_1 = require("./layout/directives");
var services_1 = require("./layout/services");
var layout_2 = require("./layout");
var AppComponent = (function () {
    function AppComponent(_state, _imageLoader, _spinner, _config, _appTitle) {
        var _this = this;
        this._state = _state;
        this._imageLoader = _imageLoader;
        this._spinner = _spinner;
        this._config = _config;
        this._appTitle = _appTitle;
        this.isMenuCollapsed = false;
        _appTitle.setTitle("GVHS");
        this._state.subscribe("menu.isCollapsed", function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        services_1.GvThemePreloader.load().then(function (values) {
            _this._spinner.hide();
        });
    };
    AppComponent.prototype._loadImages = function () {
        services_1.GvThemePreloader.registerLoader(this._imageLoader.load(layout_2.layoutPaths.images.root + 'blue-bg.jpg'));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app",
            pipes: [],
            directives: [directives_1.GvThemeRun],
            providers: [layout_1.GvLayoutConfigProvider, layout_1.GvLayoutConfig, services_1.GvImageLoaderService, services_1.GvThemeSpinner],
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [require("normalize.css"), require("./app.scss")],
            template: "\n        <main [ngClass]=\"{'menu-collapsed': isMenuCollapsed}\" gvThemeRun>\n            <div class=\"additional-bg\"></div>\n            <router-outlet></router-outlet>\n        </main>\n        "
        }),
        router_deprecated_1.RouteConfig([
            {
                path: "/pages/...",
                name: "Pages",
                component: pages_1.PagesComponent,
                useAsDefault: true
            },
            {
                path: "/**",
                redirectTo: ["Pages"]
            }
        ]), 
        __metadata('design:paramtypes', [app_state_1.AppState, services_1.GvImageLoaderService, services_1.GvThemeSpinner, layout_1.GvLayoutConfig, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.cmp.js.map