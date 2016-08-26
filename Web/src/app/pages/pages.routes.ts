import { RouterConfig } from "@angular/router";
import { Pages } from "./pages.component";
import { Dashboard } from "./dashboard";
export const routes: RouterConfig = [
    {
        path: 'pages',
        component: Pages,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
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
            }
        ]
    }

];

export const asyncRoutes: AsyncRoutes = {
    'Dashboard': require('es6-promise-loader!./dashboard')
}