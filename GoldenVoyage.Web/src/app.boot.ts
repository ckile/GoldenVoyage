import { enableProdMode } from "@angular/core";
import { bootstrap, } from '@angular/platform-browser-dynamic';
import { ELEMENT_PROBE_PROVIDERS, Title } from "@angular/platform-browser";
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AppComponent } from './layout/app.cmp';
import { SecurityService } from './services/security.service';


enableProdMode();

// 1、此处进行身份验证



var secSer = new SecurityService();

if (!secSer.IsAuthorized) {
   // 执行安全认证
}


// 2、引导程序
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Title
]).then(
    success => console.log("启动完成！"),
    error => console.log(error)
    );