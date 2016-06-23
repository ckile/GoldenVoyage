"use strict";
var core_1 = require("@angular/core");
var admin_service_1 = require("../../admin.service");
var layout_1 = require("../../../../layout");
var roomtypelist_cmp_1 = require("./roomtypelist.cmp");
var roomtypeform_cmp_1 = require("./roomtypeform.cmp");
var RoomTypeComponent = (function () {
    function RoomTypeComponent(_adminService) {
        this._adminService = _adminService;
        _adminService.setEntityUrl("/RoomType");
    }
    RoomTypeComponent = __decorate([
        core_1.Component({
            selector: "gv-admin-roomtype",
            template: require("./roomtype.cmp.html"),
            providers: [admin_service_1.AdminService],
            directives: [layout_1.GvCard, roomtypeform_cmp_1.RoomTypeFormComponent, roomtypelist_cmp_1.RoomTypeListComponent],
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService])
    ], RoomTypeComponent);
    return RoomTypeComponent;
}());
exports.RoomTypeComponent = RoomTypeComponent;
//# sourceMappingURL=roomtype.cmp.js.map