import { Component, OnInit, Input, HostBinding, HostListener, Self, ElementRef } from "@angular/core";

import { ControlValueAccessor, NgModel } from "@angular/common";
@Component({
    selector: "gv-roomview",
    templateUrl: "tmpls/roomview/roomview.cmp.html"
})
export class RoomviewComponent implements OnInit {
    public constructor( private _el: ElementRef) { }

    public ngOnInit(): void {
    }
}