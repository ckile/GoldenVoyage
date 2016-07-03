﻿
import { enableDebugTools, disableDebugTools } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";

// Environment Providers
let PROVIDERS = [];

// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
let _decorateComponentRef = function identity(value) { return value; };

if ("production" === ENV) {
    disableDebugTools();
    enableProdMode();

    PROVIDERS = [...PROVIDERS,];
} else {

    _decorateComponentRef = (cmpRef) => enableDebugTools(cmpRef);   

    PROVIDERS = [PROVIDERS];

}

export const decorateComponentRef = _decorateComponentRef;


export const ENV_PROVIDERS = [PROVIDERS];


