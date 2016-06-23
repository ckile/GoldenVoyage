"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./api.service"));
__export(require("./security.service"));
__export(require("./user.service"));
var api_service_2 = require("./api.service");
var security_service_2 = require("./security.service");
var user_service_2 = require("./user.service");
exports.COMMON_PROVIDERS = [
    api_service_2.ApiService, security_service_2.SecurityService, user_service_2.UserService
];
//# sourceMappingURL=index.js.map