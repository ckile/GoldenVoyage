import { Component } from "@angular/core";
import { RouteConfig } from "@angular/router-deprecated";
import { AccountTypeComponent,
    ReservationTypeComponent,
    MarketComponent,
    SourceComponent } from "./pages";

@Component({
    selector: "gv-admin-frontconfig",
    template: `<router-outlet></router-outlet>`
})
@RouteConfig([
    { path: "/AccountType", name: "AccountType", component: AccountTypeComponent, useAsDefault: true },
    { path: "/ReservationType", name: "ReservationType", component: ReservationTypeComponent },
    { path: "/Market", name: "Market", component: MarketComponent },
    { path: "/Source", name: "Source", component: SourceComponent },

    ])
export class FrontConfigComponent {

}