"use strict";
var core_1 = require("@angular/core");
var models_1 = require("../../../../models");
var admin_service_1 = require("../../admin.service");
var RoomTypeListComponent = (function () {
    function RoomTypeListComponent(_adminService) {
        this._adminService = _adminService;
        this.currentPage = 0;
        this.pageLength = 10;
        this.draw = 1;
        this.updateData();
    }
    RoomTypeListComponent.prototype._getParamter = function () {
        this.draw += 1;
        var result = new models_1.PaginateParamter();
        result.draw = this.draw;
        result.length = this.pageLength;
        result.start = this.pageLength * this.currentPage;
        return result;
    };
    RoomTypeListComponent.prototype.onEdit = function (entity) {
    };
    RoomTypeListComponent.prototype.updateData = function () {
        var _this = this;
        var paramter = this._getParamter();
        this._adminService.postGet(paramter).subscribe(function (result) {
            console.log(result);
            _this.items = result.data;
        });
    };
    RoomTypeListComponent = __decorate([
        core_1.Component({
            selector: "gv-roomtype-list",
            template: require("./roomtypelist.cmp.html")
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService])
    ], RoomTypeListComponent);
    return RoomTypeListComponent;
}());
exports.RoomTypeListComponent = RoomTypeListComponent;
//# sourceMappingURL=roomtypelist.cmp.js.map