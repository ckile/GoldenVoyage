"use strict";
var core_1 = require("@angular/core");
var admin_service_1 = require("../../admin.service");
var layout_1 = require("../../../../layout");
var hotellist_cmp_1 = require("./hotellist.cmp");
var hotelform_cmp_1 = require("./hotelform.cmp");
var HotelComponent = (function () {
    function HotelComponent(_adminService) {
        this._adminService = _adminService;
        _adminService.setEntityUrl("/Hotel");
    }
    HotelComponent = __decorate([
        core_1.Component({
            selector: "gv-admin-hotel",
            template: require("./hotel.cmp.html"),
            providers: [admin_service_1.AdminService],
            directives: [layout_1.GvCard, hotelform_cmp_1.HotelFormComponent, hotellist_cmp_1.HotelListComponent],
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService])
    ], HotelComponent);
    return HotelComponent;
}());
exports.HotelComponent = HotelComponent;
//# sourceMappingURL=hotel.cmp.js.map