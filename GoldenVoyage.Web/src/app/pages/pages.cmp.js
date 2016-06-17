"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var layout_1 = require("../layout");
var dashboard_1 = require("./dashboard");
var walkin_1 = require("./walkin");
var booking_1 = require("./booking");
var roomview_1 = require("./roomview");
var admin_1 = require("./admin");
var guests_1 = require("./guests");
var PagesComponent = (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () { };
    PagesComponent = __decorate([
        core_1.Component({
            selector: "pages",
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [],
            directives: [layout_1.HeaderComponent, layout_1.SidebarComponent, layout_1.GvBackTop, layout_1.GvContentTop],
            template: require("./pages.cmp.html")
        }),
        router_deprecated_1.RouteConfig([
            { path: "/Dashboard", name: "Dashboard", component: dashboard_1.DashboardComponent, useAsDefault: true },
            { path: "/Walkin", name: "Walkin", component: walkin_1.WalkinComponent },
            { path: "/Booking", name: "Booking", component: booking_1.BookingComponent },
            { path: "/RoomView", name: "RoomView", component: roomview_1.RoomviewComponent },
            { path: "/Guests", name: "Guests", component: guests_1.GuestsComponent },
            { path: "/Admin/...", name: "Admin", component: admin_1.AdminComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], PagesComponent);
    return PagesComponent;
}());
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.cmp.js.map