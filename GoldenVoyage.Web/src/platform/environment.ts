import { enableDebugTools, disableDebugTools } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";
// Environment Providers
let PROVIDERS = [];

 
let _decorateComponentRef = function identity(value) { return value; };
 

if ("production" === ENV) {
    disableDebugTools();
    enableProdMode(); 
    PROVIDERS = [...PROVIDERS,];
} else {
    _decorateComponentRef = (cmpRef) => enableDebugTools(cmpRef);

    PROVIDERS = [...PROVIDERS];
}

export const decorateComponentRef = _decorateComponentRef;

export const ENV_PROVIDERS = [...PROVIDERS];