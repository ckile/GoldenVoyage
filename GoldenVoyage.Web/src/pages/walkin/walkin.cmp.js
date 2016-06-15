"use strict";
var core_1 = require("@angular/core");
var components_1 = require("../../shared/components");
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
            template: require("./walkin.cmp.html"),
            directives: [components_1.GV_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], WalkinComponent);
    return WalkinComponent;
}());
exports.WalkinComponent = WalkinComponent;
//# sourceMappingURL=walkin.cmp.js.map