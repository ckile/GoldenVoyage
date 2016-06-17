"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require("@angular/platform-browser");
var browser_1 = require("./platform/browser");
var environment_1 = require("./platform/environment");
var app_1 = require('./app');
function main(initialHmrState) {
    return platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
        browser_1.PROVIDERS,
        environment_1.ENV_PROVIDERS,
        browser_1.DIRECTIVES,
        browser_1.PIPES,
        app_1.APP_PROVIDERS,
        platform_browser_1.Title
    ]).catch(function (err) { return console.error(err); });
}
exports.main = main;
if ('development' === ENV && HMR === true) {
    var ngHmr = require('angular2-hmr');
    ngHmr.hotModuleReplacement(main, module);
}
else {
    document.addEventListener('DOMContentLoaded', function () { return main(); });
}
//# sourceMappingURL=app.boot.js.map