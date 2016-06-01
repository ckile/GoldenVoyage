import { Component } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { SecurityService } from "./services/security.service";
import { HeaderComponent } from "./layout/header.cmm";
import { SidebarComponent } from "./layout/sidebar.cmm";

import { ForbiddenComponent} from "./layout/forbidden.cmm";
import { UnauthorizedComponent} from "./layout/unauthorized.cmm";
import { DashboardComponent } from "./layout/dashboard.cmm";
import { RoomviewComponent } from "./roomview/roomview.cmm";

//import {DataEventRecordsComponent} from "./dataeventrecords/dataeventrecords.component";
//import { DataEventRecordsService } from "./dataeventrecords/DataEventRecordsService";

@Component({
    selector: "gv-app",
    templateUrl: "tmpls/app.cmm.html",
    // styleUrls: ["css/app.component.css"],
    directives: [ROUTER_DIRECTIVES, SidebarComponent, HeaderComponent],
    providers: [
        ROUTER_PROVIDERS
    ],
    events: []
})

@RouteConfig([
    { path: "/Forbidden", name: "Forbidden", component: ForbiddenComponent },
    { path: "/Unauthorized", name: "Unauthorized", component: UnauthorizedComponent },
    { path: "/Dashboard", name: "Dashboard", component: DashboardComponent, useAsDefault: true },
    { path: "/RoomView", name: "RoomView", component: RoomviewComponent }
    //{ path: "/dataeventrecords/...", name: "DataEventRecords", component: DataEventRecordsComponent, useAsDefault: true }
])

export class AppComponent {
    constructor(public securityService: SecurityService) {
    }

    ngOnInit() {
        if (window.location.hash) {
            console.log("ngOnInit _securityService.AuthorizedCallback");
            this.securityService.AuthorizedCallback();
        }
    }

    public Login() {
        console.log("Do login logic");
        this.securityService.Authorize();
    }

    public Logout() {
        console.log("Do logout logic");
        this.securityService.Logoff();
    }
}