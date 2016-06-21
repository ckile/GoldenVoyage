import { Component, OnInit } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { HotelComponent, RoomTypeComponent, RoomFeatureComponent  } from "./components";
import { HomeComponent } from "./home.cmp";
import { RouterActive } from "../../layout";
@Component({
    selector: "gv-admin",
    template: require("./admin.cmp.html"),
    directives: [ROUTER_DIRECTIVES, RouterActive]
})
@RouteConfig([
    { path: "/", name: "Home", component: HomeComponent, useAsDefault: true },
    { path: "/Hotel", name: "Hotel", component: HotelComponent },
    { path: "/RoomType", name: "RoomType", component: RoomTypeComponent },
    { path: "/RoomFeature", name: "RoomFeature", component: RoomFeatureComponent }
])
export class AdminComponent implements OnInit {
    ngOnInit(): void { }
}