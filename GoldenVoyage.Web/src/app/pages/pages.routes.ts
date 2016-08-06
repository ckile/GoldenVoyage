import { RouterConfig } from "@angular/router";

import { PagesComponent } from "./pages.cmp";
import { DashboardComponent } from "./dashboard";
import { WalkInComponent } from "./walkin";
import { BookingComponent } from "./booking";
import { CheckInComponent } from "./checkin";
import { CheckOutComponent } from "./checkout";
import { RoomviewComponent } from "./roomview";
import { AdminComponent } from "./admin";
import { GuestsComponent, CreateGuestComponent } from "./guests";


export const PagesRoutes: RouterConfig = [
    {
        path: "pages",
        component: PagesComponent,
        children: [
            {
                path: "dashboard",
                component: DashboardComponent,
                data: {
                    menu: {
                        enable: true,
                        title: "仪表盘",
                        icon: "ion-android-home", 
                        selected: false,
                        expanded: false,
                        order: 1
                    }
                }
            },
            {
                path: "roomview",
                component: RoomviewComponent,
                data: {
                    menu: {
                        enable: true,
                        title: "房态盘", 
                        icon: "ion-grid",
                        selected: false,
                        expanded: false,
                        order: 100
                    }
                }
            },
            {
                path: "guests",
                component: GuestsComponent,
                data: {
                    menu: {
                        enable: true,
                        title: "宾客列表", 
                        icon: "ion-person-stalker",
                        selected: false,
                        expanded: false,
                        order: 200
                    }
                }
            },
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

                }
            },
            {
                path: "walkin",
                component: WalkInComponent
            },
            {
                path: "checkin",
                component: CheckInComponent                
            },
            {
                path: "checkout",
                component: CheckOutComponent
            },
            {
                path: "booking",
                component: BookingComponent
            },
            {
                path: "createguest",
                component: CreateGuestComponent
            }

        ]
    }

];