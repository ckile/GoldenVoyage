"use strict";
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
exports.APPLICATION_PROVIDERS = common_1.FORM_PROVIDERS.concat(http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS, [
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
]);
exports.PROVIDERS = exports.APPLICATION_PROVIDERS.slice();
//# sourceMappingURL=providers.js.map