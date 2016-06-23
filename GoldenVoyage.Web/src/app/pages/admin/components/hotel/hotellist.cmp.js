"use strict";
var core_1 = require("@angular/core");
var models_1 = require("../../../../models");
var admin_service_1 = require("../../admin.service");
var HotelListComponent = (function () {
    function HotelListComponent(_adminService) {
        this._adminService = _adminService;
        this.currentPage = 0;
        this.pageLength = 10;
        this.draw = 1;
        this.updateData();
    }
    HotelListComponent.prototype._getParamter = function () {
        this.draw += 1;
        var result = new models_1.PaginateParamter();
        result.draw = this.draw;
        result.length = this.pageLength;
        result.start = this.pageLength * this.currentPage;
        return result;
    };
    HotelListComponent.prototype.updateData = function () {
        var _this = this;
        var paramter = this._getParamter();
        this._adminService.postGet(paramter).subscribe(function (result) {
            console.log(result);
            _this.items = result.data;
        });
    };
    HotelListComponent = __decorate([
        core_1.Component({
            selector: "gv-hotel-list",
            template: require("./hotellist.cmp.html")
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService])
    ], HotelListComponent);
    return HotelListComponent;
}());
exports.HotelListComponent = HotelListComponent;
//# sourceMappingURL=hotellist.cmp.js.map