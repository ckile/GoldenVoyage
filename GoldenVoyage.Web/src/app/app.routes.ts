import { provideRouter, RouterConfig } from "@angular/router";

import { PagesRoutes } from "./pages";

export const routes: RouterConfig = [
    ...PagesRoutes,
    {
        path: "**",
        redirectTo: "/pages/dashboard"
    },
];

export const APP_ROUTE_PROVIDERS = [
    provideRouter(routes)
];