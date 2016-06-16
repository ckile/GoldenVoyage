﻿import { Injectable } from "@angular/core";
import { menuItems } from "../../../app.menu";

@Injectable()
export class SidebarService {
    private _router;

    // 获取所有导航项目
    public getMenuItems(): Array<Object> {
        return menuItems;
    }

    // 设置路由器
    public setRouter(router): SidebarService {
        this._router = router;
        return this;
    }

    // 选择一个
    public selectMenuItem(items: Array<any>, currentPath: string): void {
        let currentMenu;
        let assignCurrent = (menu) => (menu.selected ? currentMenu = menu : null);

        items.forEach((menu: any) => {
            this._selectItem(currentPath, [menu.component], menu);
            assignCurrent(menu);

            if (menu.subMenu) {
                menu.subMenu.forEach((subMenu) => {
                    this._selectItem(currentPath, [menu.component, subMenu.component], subMenu, menu);
                });
            }
        });

        return currentMenu;
    }

    private _selectItem(currentPath, instructions, item, parentMenu = null) {
        let route = this._generateRoute(instructions);
        item.selected = !item.disabled && this._isCurrent(route) && this._resolvePath(route, '') == currentPath;
        if (parentMenu) {
            parentMenu.expanded = parentMenu.expanded || item.selected;
        }
    }

    private _isCurrent(route) {
        return route ? this._router.isRouteActive(route) : false;
    }

    private _generateRoute(instructions) {
        return instructions.filter(i => typeof i !== 'undefined').length > 0 ? this._router.generate(instructions) : null;
    }

    private _resolvePath(instruction, collected) {
        if (instruction !== null) {
            collected += instruction.urlPath + '/';
            return this._resolvePath(instruction.child, collected)
        } else {
            return collected.slice(0, -1);
        }
    }
}