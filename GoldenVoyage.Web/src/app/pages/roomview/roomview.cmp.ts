import { Component, OnInit, Input, HostBinding, HostListener, Self, ElementRef } from "@angular/core";

import { Room } from "../../models";
import { RoomViewService } from "./roomview.service";
import { RoomBoxComponent } from "./components";
@Component({
    selector: "gv-roomview",
    template: require("./roomview.cmp.html"),
    providers: [RoomViewService],
    directives: [RoomBoxComponent]
})
export class RoomviewComponent implements OnInit {

    rooms: Array<Room> = new Array<Room>();

    public constructor(private _roomViewService: RoomViewService) {
         
    }

    public ngOnInit(): void {
    }
}