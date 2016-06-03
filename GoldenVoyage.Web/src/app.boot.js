"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var app_cmm_1 = require('./app.cmm');
var app_constants_1 = require('./app.constants');
var security_service_1 = require('./services/security.service');
platform_browser_dynamic_1.bootstrap(app_cmm_1.AppComponent, [
    router_deprecated_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    app_constants_1.Configuration,
    security_service_1.SecurityService
]);
//# sourceMappingURL=app.boot.js.map