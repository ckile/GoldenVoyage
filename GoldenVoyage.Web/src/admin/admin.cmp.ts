import { Component, OnInit } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { HotelComponent  } from "./entities/hotel.cmp";
import { RoomTypeComponent } from "./entities/roomtype.cmp";
import { HomeComponent } from "./home.cmp";
import { RouterActive } from "../shared/directives/routeractive.directive";
@Component({
    selector: "gv-admin",
    templateUrl: "tmpls/admin/admin.cmp.html",
    directives: [ROUTER_DIRECTIVES, RouterActive]
})
@RouteConfig([
    { path: "/", name: "Home", component: HomeComponent, useAsDefault: true },
    { path: "/Hotel", name: "Hotel", component: HotelComponent },
    { path: "/RoomType", name: "RoomType", component: RoomTypeComponent }
])
export class AdminComponent implements OnInit {
    ngOnInit(): void { }
}