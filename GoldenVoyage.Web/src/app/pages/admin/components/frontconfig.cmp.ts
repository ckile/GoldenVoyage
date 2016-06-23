import { Component } from "@angular/core";
import { RouteConfig } from "@angular/router-deprecated";
import { HotelComponent, RoomTypeComponent, RoomFeatureComponent  } from "../components";

@Component({
    selector: "gv-admin-roomconfig",
    template: `<router-outlet></router-outlet>`
})
@RouteConfig([
    { path: "/Hotel", name: "Hotel", component: HotelComponent, useAsDefault: true },
    { path: "/RoomType", name: "RoomType", component: RoomTypeComponent },
    { path: "/RoomFeature", name: "RoomFeature", component: RoomFeatureComponent }
])
export class FrontConfigComponent {

}