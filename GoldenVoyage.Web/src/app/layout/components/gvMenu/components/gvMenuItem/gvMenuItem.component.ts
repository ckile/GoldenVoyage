import { Component, ViewEncapsulation, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "gv-menu-item",
    encapsulation: ViewEncapsulation.None,
    styles: [require("./gvMenuItem.scss")],
    template: require("./gvMenuItem.html"),
    providers: [],
    directives: [GvMenuItem]
})
export class GvMenuItem {
    @Input() menuItem: any;
    @Input() child: boolean = false;

    @Output() itemHover = new EventEmitter<any>();
    @Output() toggleSubMenu = new EventEmitter<any>();

    public onHoverItem($event): void {
        this.itemHover.emit($event);
    }

    public onToggleSubMenu($event, item): boolean {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    }


}