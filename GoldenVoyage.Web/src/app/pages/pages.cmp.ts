import { Component, ViewEncapsulation } from "@angular/core";
import { RouteConfig } from "@angular/router-deprecated";

import { HeaderComponent, SidebarComponent, GvBackTop, GvContentTop } from "../layout";
import { DashboardComponent } from "./dashboard";
import { WalkInComponent } from "./walkin";
import { BookingComponent } from "./booking";
import { CheckInComponent } from "./checkin";
import { CheckOutComponent } from "./checkout";
import { RoomviewComponent } from "./roomview";
import { AdminComponent } from "./admin";
import { GuestsComponent,CreateGuestComponent } from "./guests";


@Component({
    selector: "pages",
    encapsulation: ViewEncapsulation.None,
    styles: [],
    directives: [ HeaderComponent, SidebarComponent, GvBackTop, GvContentTop ],
    template: require("./pages.cmp.html")
})
@RouteConfig([
        { path: "/Dashboard", name: "Dashboard", component: DashboardComponent, useAsDefault: true },
        { path: "/WalkIn", name: "WalkIn", component: WalkInComponent },
        { path: "/Booking", name: "Booking", component: BookingComponent },
        { path: "/CheckIn", name: "CheckIn", component: CheckInComponent },
        { path: "/CheckOut", name: "CheckOut", component: CheckOutComponent },
        { path: "/RoomView", name: "RoomView", component: RoomviewComponent },
        { path: "/Guests", name: "Guests", component: GuestsComponent },
        { path: "/CreateGuest", name: "CreateGuest", component: CreateGuestComponent },
        { path: "/Admin/...", name: "Admin", component: AdminComponent }

    ])
export class PagesComponent {
    constructor() { }

    ngOnInit() { }
}


