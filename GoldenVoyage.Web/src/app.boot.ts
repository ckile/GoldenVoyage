
import { bootstrap } from '@angular/platform-browser-dynamic';
import { DIRECTIVES, PIPES, PROVIDERS } from "./platform/browser";
import { ENV_PROVIDERS } from "./platform/environment";


import { AppComponent, APP_PROVIDERS } from './app';

import { COMMON_PROVIDERS } from "./app/services";

import { SecurityService } from "./app/services";


 
// 1、此处进行身份验证

var secSer = new SecurityService();

console.log(secSer.IsAuthorized);

var authoring = secSer.retrieve("Authoring") || false;

if (!secSer.IsAuthorized && authoring === false) {
    // 执行安全认证
    secSer.Authorize();
    secSer.store("Authoring", true);
}

if (!secSer.IsAuthorized) {
    if (window.location.hash) {
        secSer.AuthorizedCallback();
        //secSer.store("Authoring", false);
    }
}

// 2、引导程序

export function main(initialHmrState?: any): Promise<any> {
    return bootstrap(AppComponent, [
        PROVIDERS,
        ENV_PROVIDERS,
        DIRECTIVES,
        PIPES,
        APP_PROVIDERS,
        COMMON_PROVIDERS, 
    ]).catch(err => console.error(err));
}

 
if ('development' === ENV && HMR === true) {
    // activate hot module reload
    let ngHmr = require('angular2-hmr');
    ngHmr.hotModuleReplacement(main, module);
} else {
    // bootstrap when documetn is ready
    document.addEventListener('DOMContentLoaded', () => {
        if (secSer.IsAuthorized) {
            main();
        }
    });
}