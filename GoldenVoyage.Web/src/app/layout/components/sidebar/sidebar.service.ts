import { Injectable } from "@angular/core";
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
    public selectMenuItem(items: Array<any>): void {
        
        let currentMenu;
        let assignCurrent = (menu) => (menu.selected ? currentMenu = menu : null);

        items.forEach((menu: any) => {
            this._selectItem([menu.component], menu);
            assignCurrent(menu);

            if (menu.subMenu) {
                menu.subMenu.forEach((subMenu) => {
                    this._selectItem([menu.component, subMenu.component], subMenu, menu);
                    assignCurrent(subMenu);
                });
            }
        });

        return currentMenu;
    }

    private _selectItem(instructions, item, parentMenu = null) {
        let route = this._generateRoute(instructions);
        item.selected = !item.disabled && this._isCurrent(route);
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
     
}