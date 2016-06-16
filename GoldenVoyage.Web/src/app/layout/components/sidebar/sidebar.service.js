"use strict";
var core_1 = require("@angular/core");
var app_menu_1 = require("../../../app.menu");
var SidebarService = (function () {
    function SidebarService() {
    }
    SidebarService.prototype.getMenuItems = function () {
        return app_menu_1.menuItems;
    };
    SidebarService.prototype.setRouter = function (router) {
        this._router = router;
        return this;
    };
    SidebarService.prototype.selectMenuItem = function (items, currentPath) {
        var _this = this;
        var currentMenu;
        var assignCurrent = function (menu) { return (menu.selected ? currentMenu = menu : null); };
        items.forEach(function (menu) {
            _this._selectItem(currentPath, [menu.component], menu);
            assignCurrent(menu);
            if (menu.subMenu) {
                menu.subMenu.forEach(function (subMenu) {
                    _this._selectItem(currentPath, [menu.component, subMenu.component], subMenu, menu);
                });
            }
        });
        return currentMenu;
    };
    SidebarService.prototype._selectItem = function (currentPath, instructions, item, parentMenu) {
        if (parentMenu === void 0) { parentMenu = null; }
        var route = this._generateRoute(instructions);
        item.selected = !item.disabled && this._isCurrent(route) && this._resolvePath(route, '') == currentPath;
        if (parentMenu) {
            parentMenu.expanded = parentMenu.expanded || item.selected;
        }
    };
    SidebarService.prototype._isCurrent = function (route) {
        return route ? this._router.isRouteActive(route) : false;
    };
    SidebarService.prototype._generateRoute = function (instructions) {
        return instructions.filter(function (i) { return typeof i !== 'undefined'; }).length > 0 ? this._router.generate(instructions) : null;
    };
    SidebarService.prototype._resolvePath = function (instruction, collected) {
        if (instruction !== null) {
            collected += instruction.urlPath + '/';
            return this._resolvePath(instruction.child, collected);
        }
        else {
            return collected.slice(0, -1);
        }
    };
    SidebarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SidebarService);
    return SidebarService;
}());
exports.SidebarService = SidebarService;
//# sourceMappingURL=sidebar.service.js.map