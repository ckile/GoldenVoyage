import { Component, OnInit, ElementRef, HostListener, ViewEncapsulation } from "@angular/core"; 

import { routes } from "../../../../app/app.routes";

import { AppState } from "../../../app.state";
import { layoutSizes } from "../../../layout";
import { SidebarService } from "./sidebar.service";
import { UserService } from "../../../services";
import { EmployeeLogin } from "../../../models";
import { GvMenu } from "../gvMenu";

@Component({
    selector: "gv-sidebar",
    encapsulation: ViewEncapsulation.None,
    styles: [require("./sidebar.cmp.scss")],
    template: require("./sidebar.cmp.html"),
    providers: [SidebarService],
    directives: [GvMenu]
})
export class SidebarComponent implements OnInit {

    public routes = routes;
 
    public menuHeight: number;
    public isMenuCollapsed: boolean = false;
    public isMenuShouldCollapsed: boolean = false;

 

    constructor(private _elementRef: ElementRef, 
        private _state: AppState,
        private _sidebarService: SidebarService,
        private _userService: UserService) {
           
        this._state.subscribe("menu.isCollapsed", (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
        this._userService.currentEmployeeLogin.subscribe(login => {
            this._updateEmployeeLogin(login);
        });
    }

    public ngOnInit(): void {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
    }

    public ngAfterViewInit(): void {
        setTimeout(()=>this.updateSidebarHeight());
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

    public menuExpand(): void {
        this.menuCollapseStateChange(false);
    }

    public menuCollapse(): void {
        this.menuCollapseStateChange(true);
    }


    public updateSidebarHeight(): void {
        // TODO: get rid of magic 84 constant
        this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
    }

 
    public menuCollapseStateChange(isCollapsed: boolean): void {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    } 

    private _shouldMenuCollapse(): boolean {
        return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
    }

    private _updateEmployeeLogin(login: EmployeeLogin): void {
        //var role = login && login.Employee && login.Employee.Role || 0;
        //if ( role === 1) {
        //    this.menuItems.forEach(item => {
        //        if (item.component === "Admin") {
        //            console.log(role);
        //            item.enable = true;
        //        }
        //    });
        //}
    }
}