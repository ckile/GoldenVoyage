"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var app_state_1 = require("./app.state");
var services_1 = require("./services");
__export(require('./app.cmp'));
exports.APP_PROVIDERS = [
    app_state_1.AppState,
    services_1.ApiService,
    services_1.SecurityService
];
//# sourceMappingURL=index.js.map