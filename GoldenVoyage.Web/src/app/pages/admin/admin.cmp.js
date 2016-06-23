"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var components_1 = require("./components");
var home_cmp_1 = require("./home.cmp");
var layout_1 = require("../../layout");
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () { };
    AdminComponent = __decorate([
        core_1.Component({
            selector: "gv-admin",
            template: require("./admin.cmp.html"),
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, layout_1.RouterActive]
        }),
        router_deprecated_1.RouteConfig([
            { path: "/", name: "Home", component: home_cmp_1.HomeComponent, useAsDefault: true },
            { path: "/Hotel", name: "Hotel", component: components_1.HotelComponent },
            { path: "/RoomType", name: "RoomType", component: components_1.RoomTypeComponent },
            { path: "/RoomFeature", name: "RoomFeature", component: components_1.RoomFeatureComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.cmp.js.map