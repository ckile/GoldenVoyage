import { Component, OnInit } from "@angular/core";
import { RouteConfig } from "@angular/router-deprecated";
import { RoomConfigComponent, FrontConfigComponent  } from "./components"; 
@Component({
    selector: "gv-admin",
    template: `<router-outlet></router-outlet>` 
})
@RouteConfig([
        { path: "/RoomConfig/...", name: "RoomConfig", component: RoomConfigComponent, useAsDefault: true },
        { path: "/FrontConfig/...", name: "FrontConfig", component: FrontConfigComponent}
])
export class AdminComponent implements OnInit {
    ngOnInit(): void { }
}