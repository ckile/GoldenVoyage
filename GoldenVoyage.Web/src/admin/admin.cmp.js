"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var hotel_cmp_1 = require("./entities/hotel.cmp");
var roomtype_cmp_1 = require("./entities/roomtype.cmp");
var home_cmp_1 = require("./home.cmp");
var routeractive_directive_1 = require("../shared/directives/routeractive.directive");
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () { };
    AdminComponent = __decorate([
        core_1.Component({
            selector: "gv-admin",
            templateUrl: "tmpls/admin/admin.cmp.html",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, routeractive_directive_1.RouterActive]
        }),
        router_deprecated_1.RouteConfig([
            { path: "/", name: "Home", component: home_cmp_1.HomeComponent, useAsDefault: true },
            { path: "/Hotel", name: "Hotel", component: hotel_cmp_1.HotelComponent },
            { path: "/RoomType", name: "RoomType", component: roomtype_cmp_1.RoomTypeComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
