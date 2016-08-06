import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Room } from "../../../../../../models";
import { RoomBoxService } from "../../roombox.service";
@Component({
    selector: "gv-room", 
    template: require("./room.html"),
    styles: [require("./room.scss")] 
})
export class RoomComponent {
    @Input() room: Room;

    @Output() selected: EventEmitter<Room>;

    constructor(private _ser: RoomBoxService) { }

}