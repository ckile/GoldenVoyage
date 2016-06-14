import { enableProdMode } from "@angular/core";
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ELEMENT_PROBE_PROVIDERS } from "@angular/platform-browser";
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AppComponent } from './layout/app.cmp';
import { Configuration } from './app.constants';
import { SecurityService } from './services/security.service';

enableProdMode();

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Configuration,
    SecurityService
]).then(
    success => console.log("启动完成！"),
    error => console.log(error)
    );