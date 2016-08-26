/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Router
import { provideRouter } from '@angular/router';

import { provideWebpack } from '@angularclass/webpack-toolkit';

// Angular 2 forms
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { routes, asyncRoutes } from '../app/app.routes';

/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
export const APPLICATION_PROVIDERS = [
    // new Angular 2 forms
    disableDeprecatedForms(),
    provideForms(),
    // 初始化路由库
    provideRouter(routes),
    provideWebpack(asyncRoutes),
    ...HTTP_PROVIDERS,

    { provide: LocationStrategy, useClass: HashLocationStrategy }
];

export const PROVIDERS = [
    ...APPLICATION_PROVIDERS
];