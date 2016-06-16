import "./app.loader.ts";

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";

import { AppState } from "./app.state";
import { SecurityService, ApiService } from "./services";
import { GvImageLoaderService, GvThemePreloader, GvThemeSpinner, GvThemeRun } from "./layout";

import { GvLayoutConfigProvider, GvLayoutConfig } from "./layout";

import { layoutPaths } from "./layout";


import { PagesComponent } from "./pages";

@Component({
    selector: "gv-app",
    pipes: [],
    directives: [ROUTER_DIRECTIVES, GvThemeRun],
    providers: [GvLayoutConfigProvider, GvLayoutConfig, GvImageLoaderService, GvThemeSpinner],
    encapsulation: ViewEncapsulation.None,
    styles: [require("normalize.css"), require("./app.scss")],
    template: require("./app.cmp.html")
})

@RouteConfig([
        { path: "/pages/...", name: "Pages", component: PagesComponent, useAsDefault: true },
        {
            path: "/**",
            redirectTo: ["Pages"]
        }
])
export class AppComponent {
    isMenuCollapsed: boolean = false;

    constructor(private _state: AppState,
        private _imageLoader: GvImageLoaderService,
        private _spinner: GvThemeSpinner, 
        private _config: GvLayoutConfig,
        private _securityService: SecurityService,
        private _appTitle: Title) {

        _appTitle.setTitle("GVHS");

        this._loadImages();

        this._state.subscribe("menu.isCollapsed", (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }

    //ngOnInit() {
    //    if (window.location.hash) {
    //        console.log("ngOnInit _securityService.AuthorizedCallback");
    //        this.securityService.AuthorizedCallback();
    //    }
    //}

    
    public ngAfterViewInit(): void {
        // hide spinner once all loaders are completed
        GvThemePreloader.load().then((values) => {
            this._spinner.hide();
        });
    }

    public login() {
        console.log("Do login logic");
        //this.securityService.Authorize();
    }

    public logout() {
        console.log("Do logout logic");
        this._securityService.Logoff();
    }


    private _loadImages(): void {
        // register some loaders
        GvThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
    }

}