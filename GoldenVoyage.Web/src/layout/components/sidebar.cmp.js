"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var routeractive_directive_1 = require("../directives/routeractive.directive");
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: "gv-sidebar",
            template: require("./sidebar.cmp.html"),
            styles: [require("./sidebar.cmp.css")],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, routeractive_directive_1.RouterActive]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.cmp.js.map