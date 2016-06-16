"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var app_state_1 = require("../../../app.state");
var layout_1 = require("../../../layout");
var sidebar_service_1 = require("./sidebar.service");
var SidebarComponent = (function () {
    function SidebarComponent(_elementRef, _router, _state, _sidebarService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._router = _router;
        this._state = _state;
        this._sidebarService = _sidebarService;
        this.isMenuCollapsed = false;
        this.isMenuShouldCollapsed = false;
        this.menuItems = _sidebarService.getMenuItems();
        this._state.subscribe("menu.isCollapsed", function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        this.updateSidebarHeight();
    };
    SidebarComponent.prototype.onWindowResize = function () {
        var isMenuShouldCollapsed = this._shouldMenuCollapse();
        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
            this.menuCollapseStateChange(isMenuShouldCollapsed);
        }
        this.isMenuShouldCollapsed = isMenuShouldCollapsed;
        this.updateSidebarHeight();
    };
    SidebarComponent.prototype.updateSidebarHeight = function () {
        this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
    };
    SidebarComponent.prototype.menuCollapse = function () {
        this.menuCollapseStateChange(true);
    };
    SidebarComponent.prototype.menuExpand = function () {
        this.menuCollapseStateChange(false);
    };
    SidebarComponent.prototype.menuCollapseStateChange = function (isCollapsed) {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    SidebarComponent.prototype.hoverItem = function ($event) {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
    };
    SidebarComponent.prototype.toggleSubMenu = function ($event, item) {
        var submenu = $($event.currentTarget).next();
        if (this.isMenuCollapsed) {
            this.menuExpand();
            if (!item.expanded) {
                item.expanded = true;
            }
        }
        else {
            item.expanded = !item.expanded;
            submenu.slideToggle();
        }
        return false;
    };
    SidebarComponent.prototype._shouldMenuCollapse = function () {
        return window.innerWidth <= layout_1.layoutSizes.resWidthCollapseSidebar;
    };
    __decorate([
        core_1.HostListener('window:resize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], SidebarComponent.prototype, "onWindowResize", null);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: "gv-sidebar",
            template: require("./sidebar.cmp.html"),
            styles: [require("./sidebar.cmp.scss")],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, layout_1.GvSlimScroll],
            providers: [sidebar_service_1.SidebarService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_deprecated_1.Router, app_state_1.AppState, sidebar_service_1.SidebarService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.cmp.js.map