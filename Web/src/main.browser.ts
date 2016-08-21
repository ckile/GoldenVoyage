import { bootstrap } from '@angular/platform-browser-dynamic';

import { PLATFORM_PROVIDERS } from './platform/browser';

import { ENV_PROVIDERS, decorateComponentRef } from './platform/environment';

import { App, APP_PROVIDERS } from './app';

export function main(initialHmrState?: any): Promise<any> {
    return bootstrap(App, [
        ...PLATFORM_PROVIDERS,
        ...ENV_PROVIDERS,
        ...APP_PROVIDERS,
    ])
        .then(decorateComponentRef)
        .catch(err => console.error(err));
}

if ('development' === ENV && HMR === true) {
    let ngHmr = require('angular2-hmr');
    ngHmr.HotModuleReplacement(main, module);
} else {
    document.addEventListener('DOMContentLoaded', () => main());
}