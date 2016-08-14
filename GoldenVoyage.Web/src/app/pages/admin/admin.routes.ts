import { RouterConfig } from "@angular/router";
import { FrontConfigComponent, GuestConfigComponent, RoomConfigComponent,
    AccountTypeComponent,
    CountryComponent,
    EthnicityComponent,
    GroupTypeComponent,
    GuestTitleComponent,
    GuestTypeComponent,
    HotelComponent,
    IdentityTypeComponent,
    LanguageComponent,
    MarketComponent,
    OutOfOrderReasonComponent,
    ProvinceComponent,
    RegionComponent,
    ReservationTypeComponent,
    RoomComponent,
    RoomFeatureComponent,
    RoomTypeComponent,
    SourceComponent
} from "./components";
import { AdminComponent } from "./admin.cmp.ts";

export const AdminRoutes: RouterConfig = [
    {
        path: "admin",
        component: AdminComponent,
        data: {
            menu: {
                enable: true,
                title: "管理",
                icon: "ion-ios-toggle",
                selected: false,
                expanded: false,
                order: 300
            }
        },
        children: [
            {
                path: "front",
                component: FrontConfigComponent,
                children: [
                    {
                        path: "accounttype",
                        component: AccountTypeComponent
                    },
                    {
                        path: "reservationtype",
                        component: ReservationTypeComponent
                    },
                    {
                        path: "market",
                        component: MarketComponent
                    },
                    {
                        path: "source",
                        component: SourceComponent
                    }
                ]
            },
            {
                path: "guest",
                component: GuestConfigComponent,
                children: [
                    {
                        path: "identitytype",
                        component: IdentityTypeComponent
                    },
                    {
                        path: "country",
                        component: CountryComponent
                    },
                    {
                        path: "province",
                        component: ProvinceComponent
                    },
                    {
                        path: "Region",
                        component: RegionComponent
                    },
                    {
                        path: "guesttype",
                        component: GuestTypeComponent
                    },
                    {
                        path: "guesttitle",
                        component: GuestTitleComponent
                    },
                    {
                        path: "language",
                        component: LanguageComponent
                    },
                    {
                        path: "ethnicity",
                        component: EthnicityComponent
                    }
                ]
            },
            {
                path: "room",
                component: RoomConfigComponent,
                children: [
                    {
                        path: "hotel",
                        component: HotelComponent
                    },
                    {
                        path: "roomtype",
                        component: RoomTypeComponent
                    },
                    {
                        path: "roomfeature",
                        component: RoomFeatureComponent
                    },
                    {
                        path: "outoforderreason",
                        component: OutOfOrderReasonComponent
                    },
                    {
                        path: "room",
                        component: RoomComponent
                    }
                ]
            }
        ]
    }
]