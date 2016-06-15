"use strict";
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var AdminService = (function () {
    function AdminService(apiService) {
        this.apiService = apiService;
    }
    AdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [services_1.ApiService])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map