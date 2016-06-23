"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require("@angular/platform-browser");
var browser_1 = require("./platform/browser");
var environment_1 = require("./platform/environment");
var app_1 = require('./app');
var services_1 = require("./app/services");
var services_2 = require("./app/services");
var secSer = new services_2.SecurityService();
console.log(secSer.IsAuthorized);
var authoring = secSer.retrieve("Authoring") || false;
if (!secSer.IsAuthorized && authoring === false) {
    secSer.Authorize();
    secSer.store("Authoring", true);
}
if (!secSer.IsAuthorized) {
    if (window.location.hash) {
        secSer.AuthorizedCallback();
    }
}
function main(initialHmrState) {
    return platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
        browser_1.PROVIDERS,
        environment_1.ENV_PROVIDERS,
        browser_1.DIRECTIVES,
        browser_1.PIPES,
        app_1.APP_PROVIDERS,
        services_1.COMMON_PROVIDERS,
        platform_browser_1.Title
    ]).catch(function (err) { return console.error(err); });
}
exports.main = main;
if ('development' === ENV && HMR === true) {
    var ngHmr = require('angular2-hmr');
    ngHmr.hotModuleReplacement(main, module);
}
else {
    document.addEventListener('DOMContentLoaded', function () {
        if (secSer.IsAuthorized) {
            main();
        }
    });
}
//# sourceMappingURL=app.boot.js.map