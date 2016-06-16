// App
import {AppState} from "./app.state";
import { ApiService, SecurityService } from "./services";
export * from './app.cmp'; 

// Application wide providers
export const APP_PROVIDERS = [
    AppState,
    SecurityService,
    ApiService
];