import { Component, OnInit } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from "@angular/common";

import { SecurityService } from "./services/security.service";
import { HeaderComponent } from "./layout/header.cmp";
import { SidebarComponent } from "./layout/sidebar.cmp";

import { ForbiddenComponent} from "./layout/forbidden.cmp";
import { UnauthorizedComponent} from "./layout/unauthorized.cmp";

import { DashboardComponent } from "./layout/dashboard.cmp";
import { WalkinComponent } from "./walkin/walkin.cmp";
import { BookingComponent } from "./booking/booking.cmp";
import { RoomviewComponent } from "./roomview/roomview.cmp";
import { GuestsComponent } from "./guests/guests.cmp";

import { AdminComponent } from "./admin/admin.cmp";

//import {DataEventRecordsComponent} from "./dataeventrecords/dataeventrecords.component";
//import { DataEventRecordsService } from "./dataeventrecords/DataEventRecordsService";

@Component({
    selector: "gv-app",
    templateUrl: "tmpls/app.cmp.html",
    // styleUrls: ["css/app.component.css"],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, SidebarComponent, HeaderComponent],
    events: []
})

@RouteConfig([
    {
        path: "/Forbidden", name: "Forbidden", component: ForbiddenComponent
    },
    { path: "/Unauthorized", name: "Unauthorized", component: UnauthorizedComponent },
    { path: "/Dashboard", name: "Dashboard", component: DashboardComponent, useAsDefault: true },
    { path: "/Walkin", name: "Walkin", component: WalkinComponent },
    { path: "/Booking", name: "Booking", component: BookingComponent },
    { path: "/RoomView", name: "RoomView", component: RoomviewComponent },
    { path: "/Guests", name: "Guests", component: GuestsComponent },
    { path: "/Admin/...", name: "Admin", component: AdminComponent }
    //{ path: "/dataeventrecords/...", name: "DataEventRecords", component: DataEventRecordsComponent, useAsDefault: true }
])

export class AppComponent {
    public IsAuthorized: boolean = false;

    constructor(public securityService: SecurityService) {
        this.IsAuthorized = securityService.IsAuthorized;
    }

    ngOnInit() {
        if (window.location.hash) {
            console.log("ngOnInit _securityService.AuthorizedCallback");
            this.securityService.AuthorizedCallback();
        }
    }

    public login() {
        console.log("Do login logic");
        this.IsAuthorized = true;
        //this.securityService.Authorize();
    }

    public logout() {
        console.log("Do logout logic");
        this.securityService.Logoff();
    }
}