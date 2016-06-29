import "./app.loader.ts";

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { RouteConfig } from "@angular/router-deprecated";

import { PagesComponent } from "./pages";
import { AppState } from "./app.state";

import { UserService, SearchService } from "./services";

import { GvLayoutConfigProvider, GvLayoutConfig } from "./layout";
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
            path: "/pages/...",
            name: "Pages",
            component: PagesComponent,
            useAsDefault: true
        },
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
        private _appTitle: Title) {

        _appTitle.setTitle("GVHS");

       // this._loadImages();

        this._state.subscribe("menu.isCollapsed", (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
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