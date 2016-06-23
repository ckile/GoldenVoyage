"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_service_1 = require("../../admin.service");
var models_1 = require("../../../../models");
var RoomTypeFormComponent = (function () {
    function RoomTypeFormComponent(_adminService, fb) {
        this._adminService = _adminService;
        this.currentPage = 1;
        this.itemForm = fb.group({
            "code": ['', common_1.Validators.required],
            "description": []
        });
        this.code = this.itemForm.controls["code"];
    }
    RoomTypeFormComponent.prototype.onSubmit = function (form) {
        var entity = new models_1.Entity();
        entity.Code = form.code;
        entity.Description = form.description;
        console.log(entity);
        this._adminService.add(entity).subscribe(function (ret) {
            console.log(ret);
        });
    };
    RoomTypeFormComponent = __decorate([
        core_1.Component({
            selector: "gv-roomtype-form",
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            template: require("./roomtypeform.cmp.html")
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService, common_1.FormBuilder])
    ], RoomTypeFormComponent);
    return RoomTypeFormComponent;
}());
exports.RoomTypeFormComponent = RoomTypeFormComponent;
//# sourceMappingURL=roomtypeform.cmp.js.map