/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/common';

// Angular 2 Http
import {HTTP_PROVIDERS} from '@angular/http'; 
import { APP_ROUTE_PROVIDERS } from '../../app/app.routes';

import { disableDeprecatedForms, provideForms } from "@angular/forms";

import { Title } from "@angular/platform-browser";

/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
    disableDeprecatedForms(),
    provideForms(),
    Title, 
    ...HTTP_PROVIDERS,
    ...APP_ROUTE_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];

export const PROVIDERS = [
    ...APPLICATION_PROVIDERS
];
