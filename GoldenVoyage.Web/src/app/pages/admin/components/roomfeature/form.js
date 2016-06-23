"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_service_1 = require("../../admin.service");
var models_1 = require("../../../../models");
var FormComponent = (function () {
    function FormComponent(_adminService, fb) {
        this._adminService = _adminService;
        this.currentPage = 1;
        this.itemForm = fb.group({
            "code": ['', common_1.Validators.required],
            "description": []
        });
        this.code = this.itemForm.controls["code"];
    }
    FormComponent.prototype.onSubmit = function (form) {
        var entity = new models_1.Entity();
        entity.Code = form.code;
        entity.Description = form.description;
        console.log(entity);
        this._adminService.add(entity).subscribe(function (ret) {
            console.log(ret);
        });
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: "gv-form",
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            template: require("./form.html")
        }), 
        __metadata('design:paramtypes', [admin_service_1.AdminService, common_1.FormBuilder])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.js.map