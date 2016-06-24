import { Component } from "@angular/core";
import { RouteConfig } from "@angular/router-deprecated";
import { IdentityTypeComponent,
    CountryComponent,
    ProvinceComponent,
    RegionComponent,
    GuestTitleComponent,
    GuestTypeComponent,
    LanguageComponent,
    EthnicityComponent
    } from "./pages";

@Component({
    selector: "gv-admin-guestconfig",
    template: `<router-outlet></router-outlet>`
})
@RouteConfig([
        { path: "/IdentityType", name: "IdentityType", component: IdentityTypeComponent, useAsDefault: true }, 
        { path: "/Country", name: "Country", component: CountryComponent }, 
        { path: "/Province", name: "Province", component: ProvinceComponent }, 
        { path: "/Region", name: "Region", component: RegionComponent }, 
        { path: "/GuestType", name: "GuestType", component: GuestTypeComponent },
        { path: "/GuestTitle", name: "GuestTitle", component: GuestTitleComponent },
        { path: "/Language", name: "Language", component: LanguageComponent },
        { path: "/Ethnicity", name: "Ethnicity", component: EthnicityComponent },    
    ])
export class GuestConfigComponent {

}