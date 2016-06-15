"use strict";
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var app_cmp_1 = require('./layout/app.cmp');
var app_constants_1 = require('./app.constants');
var security_service_1 = require('./services/security.service');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_cmp_1.AppComponent, [
    router_deprecated_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    app_constants_1.Configuration,
    security_service_1.SecurityService
]).then(function (success) { return console.log("启动完成！"); }, function (error) { return console.log(error); });
//# sourceMappingURL=app.boot.js.map