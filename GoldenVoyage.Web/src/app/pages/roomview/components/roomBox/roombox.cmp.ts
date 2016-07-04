import { Component, Input, Output, EventEmitter } from "@angular/core";
import { GvCard } from "../../../../layout";
import { Room } from "../../../../models";
@Component({
    selector: "gv-roombox",
    template: require("./roombox.cmp.html"),
    directives: [GvCard]
})
export class RoomBoxComponent {
    @Input() room: Room;

    @Output() selected: EventEmitter<Room>;
}