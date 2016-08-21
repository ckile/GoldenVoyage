import { enableDebugTools, disableDebugTools  } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

let PROVIDERS = [];
let _decorateComponentRef = function identity(value) { return value; };

if ('production' === ENV) {
    disableDebugTools();
    enableProdMode();

    PROVIDERS = [
        ...PROVIDERS,
    ];
} else {
    _decorateComponentRef = (cmpRef) => {
        let _ng = (<any>window).ng;
        enableDebugTools(cmpRef);
        (<any>window).ng.probe = _ng.probe;
        (<any>window).ng.coreTokens = _ng.coreTokens;
        return cmpRef;
    };

    PROVIDERS = [
        ...PROVIDERS,
    ];
}

export const decorateComponentRef = _decorateComponentRef;

export const ENV_PROVIDERS = [
    ...PROVIDERS
];