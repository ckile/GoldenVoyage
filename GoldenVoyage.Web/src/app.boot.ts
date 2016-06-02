import { enableProdMode } from "@angular/core";
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ELEMENT_PROBE_PROVIDERS } from "@angular/platform-browser";
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AppComponent } from './app.cmp';
import { Configuration } from './app.constants';
import { SecurityService } from './services/security.service';
import { LayoutConfiguration } from "./layout/layout";

enableProdMode();

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Configuration,
    SecurityService,
    LayoutConfiguration
]).then(
    success => console.log("启动完成！"),
    error => console.log(error)
    );