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
var gv_cmp_1 = require("../shared/components/gv.cmp");
var WalkinComponent = (function () {
    function WalkinComponent() {
        this.disabled = false;
        this.types = [
            { name: '张先生', value: '1' },
            { name: '李先生', value: '2' },
            { name: '王先生', value: '3' },
            { name: '刘先生', value: '4' },
            { name: '陈先生', value: '5' },
            { name: '付先生', value: '6' }
        ];
        this.type = [];
    }
    WalkinComponent.prototype.change = function (value) {
        console.log('Changed data: ', value);
    };
    WalkinComponent.prototype.ngOnInit = function () {
    };
    WalkinComponent.prototype.ngAfterContentInit = function () {
    };
    WalkinComponent.prototype.ngAfterViewInit = function () {
    };
    WalkinComponent.prototype.routerOnActivate = function (nextInstruction, prevInstruction) {
    };
    WalkinComponent.prototype.setDate = function () {
    };
    WalkinComponent = __decorate([
        core_1.Component({
            selector: "gv-walkin",
            templateUrl: "tmpls/walkin/walkin.cmp.html",
            directives: [gv_cmp_1.GV_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], WalkinComponent);
    return WalkinComponent;
}());
exports.WalkinComponent = WalkinComponent;
