"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_service_1 = require("../../admin.service");
var models_1 = require("../../../../models");
var HotelFormComponent = (function () {
    function HotelFormComponent(_adminService, fb) {
        this._adminService = _adminService;
        this.currentPage = 1;
        this.itemForm = fb.group({
            "name": ['', common_1.Validators.required],
            "hotelDate": [],
            "reportDate": [],
            "localApi": []
        });
        this.name = this.itemForm.controls["name"];
    }
    HotelFormComponent.prototype.onSubmit = function (form) {
        var entity = new models_1.Hotel();
        entity.Name = form.name;
        entity.Profile = new models_1.HotelProfile();
        entity.Profile.HotelDate = form.hotelDate;
        entity.Profile.ReportDate = form.reportDate;
        entity.Profile.LocalServiceAddress = form.localApi;
        console.log(entity);
        this._adminService.add(entity).subscribe(function (ret) {
            console.log(ret);
        });
    };
    HotelFormComponent = __decorate([
        core_1.Component({
            selector: "gv-hotel-form",
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            template: require("./hotelform.cmp.html")
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService, common_1.FormBuilder])
    ], HotelFormComponent);
    return HotelFormComponent;
}());
exports.HotelFormComponent = HotelFormComponent;
//# sourceMappingURL=hotelform.cmp.js.map