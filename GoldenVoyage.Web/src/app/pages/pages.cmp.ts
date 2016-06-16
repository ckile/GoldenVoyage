import { Component, ViewEncapsulation } from "@angular/core";
import { RouteConfig } from "@angular/router-deprecated";

import { HeaderComponent, SidebarComponent, GvBackTop, GvContentTop } from "../layout";
import { DashboardComponent } from "./dashboard";
import { WalkinComponent } from "./walkin";
import { BookingComponent } from "./booking";
import { RoomviewComponent } from "./roomview";
import { AdminComponent } from "./admin";
import { GuestsComponent } from "./guests";

@Component({
    selector: "pages",
    encapsulation: ViewEncapsulation.None,
    styles: [],
    directives: [ HeaderComponent, SidebarComponent, GvBackTop, GvContentTop ],
    template: require("./pages.cmp.html")
})
@RouteConfig([
        { path: "/Dashboard", name: "Dashboard", component: DashboardComponent, useAsDefault: true },
        { path: "/Walkin", name: "Walkin", component: WalkinComponent },
        { path: "/Booking", name: "Booking", component: BookingComponent },
        { path: "/RoomView", name: "RoomView", component: RoomviewComponent },
        { path: "/Guests", name: "Guests", component: GuestsComponent },
        { path: "/Admin/...", name: "Admin", component: AdminComponent }

    ])
export class PagesComponent {
    constructor() { }

    ngOnInit() { }
}


