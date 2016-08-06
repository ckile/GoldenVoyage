import { Component, Input, Output, EventEmitter } from "@angular/core"; 
import { Room } from "../../../../models";
import { RoomComponent } from "./components/room";
import { RoomBoxService } from "./roombox.service";
@Component({
    selector: "gv-roombox",
    template: require("./roombox.cmp.html"),
    directives: [RoomComponent]    
})
export class RoomBoxComponent {
    @Input() rooms: Array<Room>;

    @Output() selected: EventEmitter<Room>;

    constructor(private _ser: RoomBoxService) { }

}