import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Room } from "../../../../models";
@Component({
    selector: "gv-roombox"
})
export class RoomBoxComponent {

   @Input() room: Room;

   @Output() selected: EventEmitter<Room>;


    

}