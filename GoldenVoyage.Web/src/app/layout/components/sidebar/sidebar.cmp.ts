import { Component, OnInit, ElementRef, HostListener, ViewEncapsulation } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from "@angular/router-deprecated";

import { AppState } from "../../../app.state";
import { layoutSizes, GvSlimScroll } from "../../../layout";
import { SidebarService } from "./sidebar.service";

@Component({
    selector: "gv-sidebar",
    template: require("./sidebar.cmp.html"),
    styles: [require("./sidebar.cmp.scss")],
    directives: [ROUTER_DIRECTIVES, GvSlimScroll],
    providers: [SidebarService]
})
export class SidebarComponent implements OnInit {
    public menuItems: Array<any>;

    public menuHeight: number;
    public isMenuCollapsed: boolean = false;
    public isMenuShouldCollapsed: boolean = false;

    public showHoverElem: boolean;
    public hoverElemHeight: number;
    public hoverElemTop: number;

    constructor(private _elementRef: ElementRef,
        private _router: Router,
        private _state: AppState,
        private _sidebarService: SidebarService) {
        this.menuItems = _sidebarService.getMenuItems();

        this._state.subscribe("menu.isCollapsed", (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }

    public ngOnInit(): void {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
    }

    public ngAfterViewInit(): void {
        this.updateSidebarHeight();
    }

    @HostListener('window:resize')
    public onWindowResize(): void {
        var isMenuShouldCollapsed = this._shouldMenuCollapse();

        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
            this.menuCollapseStateChange(isMenuShouldCollapsed);
        }
        this.isMenuShouldCollapsed = isMenuShouldCollapsed;
        this.updateSidebarHeight();
    }

    public updateSidebarHeight(): void {
        // TODO: get rid of magic 84 constant
        this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
    }

    public menuCollapse(): void {
        this.menuCollapseStateChange(true);
    }

    public menuExpand(): void {
        this.menuCollapseStateChange(false);
    }

    public menuCollapseStateChange(isCollapsed: boolean): void {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    }

    public hoverItem($event): void {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        // TODO: get rid of magic 66 constant
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
    }

    public toggleSubMenu($event, item): boolean {
        var submenu = $($event.currentTarget).next();

        if (this.isMenuCollapsed) {
            this.menuExpand();
            if (!item.expanded) {
                item.expanded = true;
            }
        } else {
            item.expanded = !item.expanded;
            submenu.slideToggle();
        }

        return false;
    }

    private _shouldMenuCollapse(): boolean {
        return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
    }
}