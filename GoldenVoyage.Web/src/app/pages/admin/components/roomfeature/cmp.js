"use strict";
var core_1 = require("@angular/core");
var admin_service_1 = require("../../admin.service");
var layout_1 = require("../../../../layout");
var list_1 = require("./list");
var form_1 = require("./form");
var RoomFeatureComponent = (function () {
    function RoomFeatureComponent(_adminService) {
        this._adminService = _adminService;
        _adminService.setEntityUrl("/RoomFeature");
    }
    RoomFeatureComponent = __decorate([
        core_1.Component({
            selector: "gv-admin-feature",
            template: require("./cmp.html"),
            providers: [admin_service_1.AdminService],
            directives: [layout_1.GvCard, form_1.FormComponent, list_1.ListComponent],
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService])
    ], RoomFeatureComponent);
    return RoomFeatureComponent;
}());
exports.RoomFeatureComponent = RoomFeatureComponent;
//# sourceMappingURL=cmp.js.map