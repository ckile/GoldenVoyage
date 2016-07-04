import "./app.loader.ts";

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { RouteConfig, Router } from "@angular/router-deprecated";

import { PagesComponent } from "./pages";
import { AppState } from "./app.state";

import { SearchService, UserService } from "./services";

import { GvLayoutConfigProvider, GvLayoutConfig, UnauthorizedComponent } from "./layout";
import { GvThemeRun } from "./layout/directives";
import { GvImageLoaderService, GvThemePreloader, GvThemeSpinner } from "./layout/services";

import { SecurityService, ApiService } from "./services";

import { layoutPaths } from "./layout";

/**
 * Top Level Component
 */
@Component({
    selector: "app",
    pipes: [],
    directives: [GvThemeRun],
    providers: [SearchService, GvLayoutConfigProvider, GvLayoutConfig, GvImageLoaderService, GvThemeSpinner],
    encapsulation: ViewEncapsulation.None,
    styles: [require("normalize.css"), require("./app.scss")],
    template: `
        <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" gvThemeRun>
            <div class="additional-bg"></div>
            <router-outlet></router-outlet>
        </main>
        `
})
@RouteConfig([
    {
        path: "/unauthorized",
        name: "Unauthorized",
        component: UnauthorizedComponent,
        useAsDefault: true
    },
    {
        path: "/pages/...",
        name: "Pages",
        component: PagesComponent
    },
    {
        path: "/**",
        redirectTo: ["Unauthorized"]
    },

])
export class AppComponent {
    isMenuCollapsed: boolean = false;

    constructor(private _state: AppState,
        private _imageLoader: GvImageLoaderService,
        private _spinner: GvThemeSpinner,
        private _config: GvLayoutConfig,
        private _appTitle: Title,
        private _userService: UserService,
        private _router: Router) {

        this._userService.currentEmployeeLogin.subscribe((login) => {
            _router.navigate(["Pages"]);
        });

        this._userService.getCurrentEmployeeLogin();

        this._state.subscribe("menu.isCollapsed", (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });

        _appTitle.setTitle("GVHS");
    }

    public ngAfterViewInit(): void {
        // hide spinner once all loaders are completed
        GvThemePreloader.load().then((values) => {
            this._spinner.hide();
        });
    }

    private _loadImages(): void {
        // register some loaders
        GvThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'blue-bg.jpg'));
    }
}