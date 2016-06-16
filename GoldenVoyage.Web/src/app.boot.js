"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require("@angular/platform-browser");
var browser_1 = require("./platform/browser");
var environment_1 = require("./platform/environment");
var app_1 = require('./app');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
    browser_1.PROVIDERS,
    environment_1.ENV_PROVIDERS,
    browser_1.DIRECTIVES,
    browser_1.PIPES,
    app_1.APP_PROVIDERS,
    platform_browser_1.Title
]).then(function (success) { return console.log("启动完成！"); }, function (error) { return console.log(error); });
//# sourceMappingURL=app.boot.js.map